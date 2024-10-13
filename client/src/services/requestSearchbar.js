import axios from "axios";

const searchRecipes = async (searchTerm) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/produit`,
      {
        params: { q: searchTerm },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la recherche des produit:", error);
    throw error;
  }
};

export default searchRecipes;
