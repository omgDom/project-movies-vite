import { Route, Routes } from "react-router-dom";
import { About } from "../components/About";
import { MoviesList } from "../components/movies/MoviesList";
import { MovieInfo } from "../components/movies/MovieInfo";
import { PageNotFound } from "../components/PageNotFound";

const RoutesComponent = () => {

const routes = (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/movie/:movieTitle" element={<MovieInfo />} />
      <Route path="/" element={<MoviesList />}/>
    </Routes>
  );

  return routes;
};

export default RoutesComponent;