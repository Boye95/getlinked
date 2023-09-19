import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="bg-[#150E28] w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
