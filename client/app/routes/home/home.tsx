import type { Route } from "../../+types/root";
import Mosaic from "./components/Mosaic";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Furniture Store" },
    { name: "description", content: "This is a furniture store." },
  ];
}

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Mosaic />
    </div>
  );
}
