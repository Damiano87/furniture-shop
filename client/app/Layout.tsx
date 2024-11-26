import { Outlet } from "react-router";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
