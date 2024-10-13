import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../assets/images/burger.png";
import Close from "../../assets/images/close1.png";
import Button from "../Button";

export default function MenuNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((oldState) => !oldState);
  };

  return (
    <div className="menu">
      <button type="button" onClick={handleMenu} className="burger">
        <img src={Menu} alt="Menu" />
      </button>
      {menuOpen ? (
        <section>
          <button type="button" onClick={handleMenu}>
            <img src={Close} alt="Close" />
          </button>
          <Link to="/commande">Ma commande</Link>
          <Link to="/patisserie">Nos Pâtisseries</Link>
          <Link to="/register">Inscription</Link>
          <Link to="/login">
            <Button text="Connexion" />
          </Link>
        </section>
      ) : null}
    </div>
  );
}
