import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Accueil from "./pages/Accueil";
import DetailsFilm from "./pages/DetailsFilm";
import Favoris from "./pages/Favoris";
import NonTrouve from "./pages/NonTrouve";

function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <div className="topbar__inner">
          <Link to="/" className="brand">🎬 MovieBrowser</Link>

          <nav className="nav">
            <Link to="/" className="nav__link">Accueil</Link>
            <Link to="/favoris" className="nav__link">Favoris</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/film/:id" element={<DetailsFilm />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="*" element={<NonTrouve />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
