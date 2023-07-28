import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import SingleMoviePage from "./pages/singleMoviePage/SingleMoviePage";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  const [movie, setMovie] = useState("avengers");
  return (
    <>
      <ThemeContextProvider>
        <BrowserRouter>
          <Navbar movie={movie} setMovie={setMovie} />
          <Routes>
            <Route
              path="/"
              element={<MoviesPage movie={movie} setMovie={setMovie} />}
            />
            <Route path="/:id" element={<SingleMoviePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
