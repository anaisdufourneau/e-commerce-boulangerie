import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";

export default function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
