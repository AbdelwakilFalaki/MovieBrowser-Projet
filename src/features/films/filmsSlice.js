import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoris: [],
  dejaVus: [],
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    ajouterFavori: (state, action) => {
      const film = action.payload;
      const existeDeja = state.favoris.some((f) => f.id === film.id);
      if (!existeDeja) state.favoris.push(film);
    },
    supprimerFavori: (state, action) => {
      const id = action.payload;
      state.favoris = state.favoris.filter((f) => f.id !== id);
    },
    marquerDejaVu: (state, action) => {
      const film = action.payload;
      const existeDeja = state.dejaVus.some((f) => f.id === film.id);
      if (!existeDeja) state.dejaVus.push(film);
    },
    supprimerDejaVu: (state, action) => {
      const id = action.payload;
      state.dejaVus = state.dejaVus.filter((f) => f.id !== id);
    },
  },
});

export const {
  ajouterFavori,
  supprimerFavori,
  marquerDejaVu,
  supprimerDejaVu,
} = filmsSlice.actions;

export default filmsSlice.reducer;
