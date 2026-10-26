export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wave Pro Headphones",
    category: "Audio",
    description: "Comfortable wireless headphones with rich sound and all-day battery life.",
    price: 89.99,
    image: "/products/headphones.svg",
    imageAlt: "Purple over-ear wireless headphones",
  },
  {
    id: 2,
    name: "Orbit Smartwatch",
    category: "Wearables",
    description: "A lightweight smartwatch for activity tracking, calls, and daily reminders.",
    price: 129.99,
    image: "/products/smartwatch.svg",
    imageAlt: "Dark smartwatch with a colourful activity display",
  },
  {
    id: 3,
    name: "Pulse Mini Speaker",
    category: "Audio",
    description: "A compact Bluetooth speaker with clear sound and a splash-resistant body.",
    price: 64.99,
    image: "/products/speaker.svg",
    imageAlt: "Compact blue portable Bluetooth speaker",
  },
  {
    id: 4,
    name: "Vector Gaming Mouse",
    category: "Accessories",
    description: "A responsive ergonomic mouse with adjustable sensitivity and soft lighting.",
    price: 49.99,
    image: "/products/mouse.svg",
    imageAlt: "Black ergonomic gaming mouse with purple lighting",
  },
];
