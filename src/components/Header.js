import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
  return (
    <div
      style={{
        border: "1px solid blue",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ marginLeft: "20px" }}>Current Header</p>
      <div
        style={{
          marginRight: "20px",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <IoMdNotificationsOutline />
        <img
          src="/logoimage.jpg"
          alt="no data found"
          style={{ height: "20px", width: "20px", borderRadius: "20px" }}
        />
      </div>
    </div>
  );
}
