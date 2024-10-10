import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo1.png";
import "../../styles/navbar.css";
import MenuBurger from "./MenuBurger";
// import { useAuth } from "../../context/authContext";

export default function Navbar() {
  return (
    <nav>
      <section>
        <Link to="/patisserie">Nos pâtisseries</Link>
      </section>
      <Link to="/">
        <img src={Logo} alt="Miam" />
      </Link>
      <MenuBurger />
    </nav>
  );
}
