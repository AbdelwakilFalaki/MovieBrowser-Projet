import { Link } from "react-router-dom";

function CarteFilm({ film }) {
  const posterUrl = film.poster_path
    ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
    : null;

  return (
    <div className="carte">
      <Link to={`/film/${film.id}`} className="carte__posterLink">
        {posterUrl ? (
          <img className="carte__poster" src={posterUrl} alt={film.title} />
        ) : (
          <div className="carte__posterPlaceholder">No image</div>
        )}
      </Link>

      <div className="carte__body">
        <h3 className="carte__titre" title={film.title}>{film.title}</h3>

        <Link to={`/film/${film.id}`} className="btn btn--ghost">
          Voir détails
        </Link>
      </div>
    </div>
  );
}

export default CarteFilm;
