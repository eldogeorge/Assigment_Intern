import ButtonIcon from "../Ui/ButtonIcon";
import Logo from "../Ui/Logo";
import { RxDashboard } from "react-icons/rx";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { LuCalendarDays } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <div
      style={{
        border: "1px solid red",
        width: "100%",
        gridRow: "1/-1",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo source={""} />
        <p style={{ fontSize: "20px" }}>Base</p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            padding: "1.5rem",
          }}
        >
          <ButtonIcon icon={<RxDashboard />} text="Dashboard" />
          <ButtonIcon icon={<IoStatsChartOutline />} text="Upload" />
          <ButtonIcon icon={<FaFileInvoice />} text="Invoice" />
          <ButtonIcon icon={<CgNotes />} text="Schedule" />
          <ButtonIcon icon={<LuCalendarDays />} text="Calender" />
          <ButtonIcon icon={<IoNotifications />} text="Notification" />
          <ButtonIcon icon={<IoSettingsOutline />} text="Settings" />
        </div>
      </div>
    </div>
  );
}
