import axios from "axios";

const recipeLoader = async ({ params }) => {
  const [produitResponse] = await Promise.all([
    axios.get(`${import.meta.env.VITE_API_URL}/api/produit/${params.id}`),
  ]);

  return {
    recipe: produitResponse.data,
  };
};

export default recipeLoader;
