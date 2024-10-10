import { useLoaderData } from "react-router-dom";
import Carrousel from "./Carrousel";
import "../../styles/imageCarrousel.css";

export default function ImageCarrousel() {
  const { entrees, plats, desserts } = useLoaderData();
  return (
    <div>
      <section>
        <h2>LES ENTREES</h2>
        <Carrousel category={entrees} />
      </section>
      <section>
        <h2>LES PLATS</h2>
        <Carrousel category={plats} />
      </section>
      <section>
        <h2>LES DESSERTS</h2>
        <Carrousel category={desserts} />
      </section>
    </div>
  );
}
