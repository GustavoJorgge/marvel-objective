import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
