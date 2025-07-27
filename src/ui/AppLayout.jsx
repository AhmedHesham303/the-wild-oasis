import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./header";
function AppLayout() {
  return (
    <div>
      <Header />

      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
