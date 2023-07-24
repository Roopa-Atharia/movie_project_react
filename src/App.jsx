import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import SingleMovieComponent from "./pages/singleMovie/SingleMovieComponent";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/:id" element={<SingleMovieComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
