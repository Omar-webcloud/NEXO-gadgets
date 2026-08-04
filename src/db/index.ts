import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

function getPool(): Pool {
  if (globalForDb.__arenaNextJsPostgresqlPool) {
    return globalForDb.__arenaNextJsPostgresqlPool;
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
  }

  const p = new Pool({ connectionString: databaseUrl });

  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsPostgresqlPool = p;
  }

  return p;
}

let _db: NodePgDatabase | undefined;

export function getDb(): NodePgDatabase {
  if (!_db) {
    _db = drizzle(getPool());
  }
  return _db;
}

/** @deprecated Import `getDb` instead — kept for backward compatibility. */
export const db = new Proxy({} as NodePgDatabase, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});

export { getPool as pool };
