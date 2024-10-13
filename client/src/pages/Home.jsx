import { useState, useEffect, useCallback } from "react";
// import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import searchRecipes from "../services/requestSearchbar";
import loupe from "../assets/images/loupe.png";
import "../styles/home.css";

// import Button from "../components/Button";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [ModalOpen, setModalOpen] = useState(false);

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = useCallback(async () => {
    if (searchTerm) {
      try {
        const response = await searchRecipes(searchTerm);
        setResults(response);
        setModalOpen(true);
      } catch (error) {
        console.error("Erreur lors de la recherche :", error);
      }
    }
  }, [searchTerm]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleSearchClick();
      } else if (event.key === "Escape") {
        closeModal();
      }
    },
    [handleSearchClick, closeModal]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);
  const [littleProduit, setLittleProduit] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/produit`)
      .then((response) => setLittleProduit(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des produits :", error)
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Card-Pastry">
      <div className="Decouverte">
        <div>
          <h1>DÉCOUVREZ L'UNIVERS DE PASTRY CHIC & CO</h1>
        </div>
        <div className="search_box">
          <img src={loupe} alt="loupe" />
          <input
            type="text"
            placeholder="Nos pâtisseries..."
            value={searchTerm}
            onChange={handleChangeSearch}
            onKeyUp={handleKeyUp}
          />
          <button type="button" onClick={handleSearchClick}>
            Rechercher{" "}
          </button>
        </div>
        {ModalOpen && (
          <div className="modal">
            <div className="modal_content">
              <button className="close" type="button" onClick={closeModal}>
                &times;
              </button>
              <h2>Résultats de la recherche :</h2>
              {results.length > 0 ? (
                <ul>
                  {results.map((produit) => (
                    <li key={produit.id}>
                      <Link to={`/patisserie/${produit.id}`}>
                        <div className="pastry1">
                          <img
                            src={`${import.meta.env.VITE_API_URL}/upload/${produit.image_url}`}
                            alt={produit.title}
                            className="imageModal"
                          />
                        </div>
                        <div>
                          <h2>{produit.title}</h2>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucun résultat trouvé</p>
              )}
            </div>
          </div>
        )}
        <section className="right">
          {littleProduit.length &&
            littleProduit.map((produit) => (
              <article key={produit.id}>
                <div className="card">
                  <div className="pastry">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/upload/${produit.image_url}`}
                      alt={`img de ${produit.title}`}
                      className="imageHome"
                    />
                  </div>
                  <div className="titre-desc">
                    <h2>{produit.title}</h2>
                    <p>{produit.description}</p>
                    <p>{produit.prix}€</p>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </div>
    </div>
  );
}
