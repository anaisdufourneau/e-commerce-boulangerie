import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo1.png";
import "../../styles/navbar.css";
import MenuBurger from "./MenuBurger";
import { useAuth } from "../../context/authContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav>
      <section>
        {user ? <Link to="/create-produit">ajoutez un produit</Link> : null}
        <Link to="/patisserie">Nos pâtisseries</Link>
      </section>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <MenuBurger />
      <section>
        {user ? (
          <button
            onClick={handleLogout}
            type="button"
            className="logout-button"
          >
            Déconnexion
          </button>
        ) : (
          <>
            <Link to="/register">Inscription</Link>
            <button onClick={handleLogin} type="button">
              Connexion
            </button>
          </>
        )}
      </section>
    </nav>
  );
}
