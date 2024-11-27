import { Outlet } from "react-router";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "./components/Footer";
import Overlay from "./components/Overlay";

export default function Layout() {
  return (
    <div>
      <Overlay />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
