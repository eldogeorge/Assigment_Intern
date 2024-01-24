import { Outlet } from "react-router-dom";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
}
