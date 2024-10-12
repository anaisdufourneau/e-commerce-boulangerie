import axios from "axios";

const recipeLoader = async ({ params }) => {
  const [recipeResponse] = await Promise.all([
    axios.get(`${import.meta.env.VITE_API_URL}/api/recipes/${params.id}`),
  ]);

  return {
    recipe: recipeResponse.data,
  };
};

export default recipeLoader;
