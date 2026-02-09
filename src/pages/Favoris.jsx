import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    supprimerFavori,
    supprimerDejaVu,
} from "../features/films/filmsSlice";
import { useState } from "react";


function Favoris() {
    const dispatch = useDispatch();
    const favoris = useSelector((state) => state.films.favoris);
    const dejaVus = useSelector((state) => state.films.dejaVus);

    const [nom, setNom] = useState("");
    const [message, setMessage] = useState("");
    const [erreurForm, setErreurForm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nom.trim() === "" || message.trim() === "") {
            setErreurForm("Tous les champs sont obligatoires.");
            return;
        }

        setErreurForm("");
        alert("Message envoyé !");
        setNom("");
        setMessage("");
    };


    return (
        <div>
            <h2>Favoris & Déjà vus</h2>
            <h3>📝 Laisser un commentaire</h3>

            <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
                <div>
                    <input
                        type="text"
                        placeholder="Votre nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Votre message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <button type="submit">Envoyer</button>

                {erreurForm && <p style={{ color: "red" }}>{erreurForm}</p>}
            </form>

            <p>
                <Link to="/">⬅ Retour à l’accueil</Link>
            </p>

            <h3>⭐ Favoris</h3>
            {favoris.length === 0 ? (
                <p>Aucun favori.</p>
            ) : (
                <ul>
                    {favoris.map((film) => (
                        <li key={film.id}>
                            <Link to={`/film/${film.id}`}>{film.title}</Link>{" "}
                            <button onClick={() => dispatch(supprimerFavori(film.id))}>
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <h3>✅ Déjà vus</h3>
            {dejaVus.length === 0 ? (
                <p>Aucun film déjà vu.</p>
            ) : (
                <ul>
                    {dejaVus.map((film) => (
                        <li key={film.id}>
                            <Link to={`/film/${film.id}`}>{film.title}</Link>{" "}
                            <button onClick={() => dispatch(supprimerDejaVu(film.id))}>
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Favoris;
