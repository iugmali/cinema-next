import Itens from "components/Itens";
import {MediaItemList} from "../../../types/media";
import MovieItem from "components/Itens/MediaItem";

export default function MovieList ({movies}: MediaItemList) {
  return (
    <Itens>
      {movies && movies.results.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </Itens>
  );
}