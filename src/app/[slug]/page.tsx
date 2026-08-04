import { notFound, redirect } from "next/navigation";
import { products } from "@/lib/products";

export default async function LegacyProductRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  redirect(`/products/${product.slug}`);
}
