export interface Division {
  id: string;
  name: string;
  districts: string[];
}

export const BANGLADESH_DIVISIONS: Division[] = [
  {
    id: "chattogram",
    name: "Chattogram Division",
    districts: [
      "Chattogram",
      "Bandarban",
      "Brahmanbaria",
      "Chandpur",
      "Cox's Bazar",
      "Cumilla",
      "Feni",
      "Khagrachhari",
      "Lakshmipur",
      "Noakhali",
      "Rangamati",
    ],
  },
  {
    id: "dhaka",
    name: "Dhaka Division",
    districts: [
      "Dhaka",
      "Faridpur",
      "Gazipur",
      "Gopalganj",
      "Kishoreganj",
      "Madaripur",
      "Manikganj",
      "Munshiganj",
      "Narayanganj",
      "Narsingdi",
      "Rajbari",
      "Shariatpur",
      "Tangail",
    ],
  },
  {
    id: "barishal",
    name: "Barishal Division",
    districts: [
      "Barguna",
      "Barishal",
      "Bhola",
      "Jhalokati",
      "Patuakhali",
      "Pirojpur",
    ],
  },
  {
    id: "khulna",
    name: "Khulna Division",
    districts: [
      "Bagerhat",
      "Chuadanga",
      "Jashore",
      "Jhenaidah",
      "Khulna",
      "Kushtia",
      "Magura",
      "Meherpur",
      "Narail",
      "Satkhira",
    ],
  },
  {
    id: "mymensingh",
    name: "Mymensingh Division",
    districts: [
      "Jamalpur",
      "Mymensingh",
      "Netrokona",
      "Sherpur",
    ],
  },
  {
    id: "rajshahi",
    name: "Rajshahi Division",
    districts: [
      "Bogura",
      "Joypurhat",
      "Naogaon",
      "Natore",
      "Chapainawabganj",
      "Pabna",
      "Rajshahi",
      "Sirajganj",
    ],
  },
  {
    id: "rangpur",
    name: "Rangpur Division",
    districts: [
      "Dinajpur",
      "Gaibandha",
      "Kurigram",
      "Lalmonirhat",
      "Nilphamari",
      "Panchagarh",
      "Rangpur",
      "Thakurgaon",
    ],
  },
  {
    id: "sylhet",
    name: "Sylhet Division",
    districts: [
      "Habiganj",
      "Moulvibazar",
      "Sunamganj",
      "Sylhet",
    ],
  },
];

// Helper array of all 64 districts with division info
export interface DistrictOption {
  name: string;
  divisionName: string;
  divisionId: string;
}

export const ALL_DISTRICTS: DistrictOption[] = BANGLADESH_DIVISIONS.flatMap((div) =>
  div.districts.map((district) => ({
    name: district,
    divisionName: div.name,
    divisionId: div.id,
  }))
).sort((a, b) => a.name.localeCompare(b.name));

/**
 * Calculates delivery fee based on selected district name.
 * Chattogram (Chittagong) district: 100 Tk
 * Any other district outside Chittagong: 160 Tk
 */
export function getDeliveryFee(districtName: string): number {
  if (!districtName) return 160;
  const normalized = districtName.trim().toLowerCase();
  if (normalized === "chattogram" || normalized === "chittagong") {
    return 100;
  }
  return 160;
}
