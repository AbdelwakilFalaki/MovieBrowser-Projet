import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "../features/films/filmsSlice";

function chargerDepuisLocalStorage() {
  try {
    const data = localStorage.getItem("etat_films");
    return data ? JSON.parse(data) : undefined;
  } catch (e) {
    return undefined;
  }
}

function sauvegarderDansLocalStorage(state) {
  try {
    localStorage.setItem("etat_films", JSON.stringify(state));
  } catch (e) {
    
  }
}

const preloadedState = chargerDepuisLocalStorage();

export const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
  preloadedState,
});


store.subscribe(() => {
  sauvegarderDansLocalStorage({
    films: store.getState().films,
  });
});
