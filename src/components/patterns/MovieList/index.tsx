import Itens from "components/Itens";
import {MediaItemData} from "../../../types/media";
import MoviesItem from "components/Itens/MoviesItem";

export default function MovieList ({movies}: MediaItemData) {
  return (
    <Itens>
      {movies && movies.results.map((movie) => (
        <MoviesItem key={movie.id} blurDataUrl={"/filme-poster.png"} displayItem={false} {...movie} />
      ))}
    </Itens>
  );
}