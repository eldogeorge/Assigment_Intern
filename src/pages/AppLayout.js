import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "26rem 1fr",
        gridTemplateRows: "auto 1fr",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}
