import axios from "axios";

const getUserProduit = async (userId) =>
  axios
    .get(`${import.meta.env.VITE_API_URL}/api/produit`, { params: { userId } })
    .then((response) => response.data);

export default getUserProduit;
