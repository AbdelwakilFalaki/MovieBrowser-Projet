const API_KEY = "b2d57d6dcb26edf4bb9638237f178f2c";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getFilmsPopulaires() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`
  );

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des films");
  }

  const data = await response.json();
  return data.results;
}
export async function getDetailsFilm(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`
  );

  if (!response.ok) {
    throw new Error("Erreur lors du chargement des détails du film");
  }

  const data = await response.json();
  return data;
}
