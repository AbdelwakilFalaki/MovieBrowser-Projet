import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetailsFilm } from "../services/serviceTMDB";
import { useDispatch, useSelector } from "react-redux";
import { ajouterFavori, marquerDejaVu } from "../features/films/filmsSlice";


function DetailsFilm() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const favoris = useSelector((state) => state.films.favoris);
    const dejaVus = useSelector((state) => state.films.dejaVus);

    const estFavori = favoris.some((f) => String(f.id) === String(id));
    const estDejaVu = dejaVus.some((f) => String(f.id) === String(id));


    const [film, setFilm] = useState(null);
    const [chargement, setChargement] = useState(true);
    const [erreur, setErreur] = useState(null);

    useEffect(() => {
        setChargement(true);
        setErreur(null);

        getDetailsFilm(id)
            .then((data) => {
                setFilm(data);
                setChargement(false);
            })
            .catch((error) => {
                setErreur(error.message);
                setChargement(false);
            });
    }, [id]);

    if (chargement) return <p>Chargement...</p>;
    if (erreur) return <p>Erreur : {erreur}</p>;
    if (!film) return <p>Aucun film trouvé.</p>;

    const posterUrl = film.poster_path
        ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
        : null;

    return (
        <div>
            <Link to="/">⬅ Retour</Link>

            <h2>{film.title}</h2>
            <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <button
                    onClick={() => dispatch(ajouterFavori(film))}
                    disabled={estFavori}
                >
                    {estFavori ? "Déjà dans favoris" : "Ajouter aux favoris"}
                </button>

                <button
                    onClick={() => dispatch(marquerDejaVu(film))}
                    disabled={estDejaVu}
                >
                    {estDejaVu ? "Déjà vu" : "Marquer déjà vu"}
                </button>
            </div>


            {posterUrl && (
                <img
                    src={posterUrl}
                    alt={film.title}
                    style={{ width: 200, display: "block", marginBottom: 10 }}
                />
            )}

            <p>
                <strong>Date de sortie :</strong> {film.release_date || "N/A"}
            </p>

            <p>
                <strong>Résumé :</strong> {film.overview || "N/A"}
            </p>
        </div>
    );
}

export default DetailsFilm;
