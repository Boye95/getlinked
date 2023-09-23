import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
  return (
    <div className="relative w-full overflow-hidden bg-[#150E28]">
      <Header />
      <Outlet />
    </div>
  );
}
