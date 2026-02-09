import { useEffect, useState } from "react";
import { getFilmsPopulaires } from "../services/serviceTMDB";
import CarteFilm from "../components/CarteFilm";

function Accueil() {
  const [films, setFilms] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    getFilmsPopulaires()
      .then((data) => {
        setFilms(data);
        setChargement(false);
      })
      .catch((error) => {
        setErreur(error.message);
        setChargement(false);
      });
  }, []);

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <div>
      <h2>Films populaires</h2>

      <div className="grille">
        {films.map((film) => (
          <CarteFilm key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
