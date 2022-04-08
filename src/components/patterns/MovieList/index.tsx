import Itens from "components/Itens";
import {MediaItemList} from "../../../types/media";
import MediaItem from "components/Itens/MediaItem";

export default function MovieList ({movies}: MediaItemList) {
  return (
    <Itens>
      {movies && movies.results.map((movie) => (
        <MediaItem key={movie.id} displayItem={false} {...movie} />
      ))}
    </Itens>
  );
}