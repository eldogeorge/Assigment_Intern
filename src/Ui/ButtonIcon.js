import { NavLink } from "react-router-dom";

export default function ButtonIcon({ icon, text }) {
  return (
    <NavLink
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        textDecoration: "none",
        color: "black",
      }}
    >
      <div>{icon}</div>
      <p>{text}</p>
    </NavLink>
  );
}
