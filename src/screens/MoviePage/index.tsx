import DefaultPage from "components/patterns/DefaultPage";
import {MovieDetailsData} from "../../types/movie";
import MovieDetailsItem from "../../components/Itens/MovieDetailsItem";
import NotFound from "../NotFound";

export default function MoviePage({movie}:MovieDetailsData) {
  console.log(movie);
  if (movie.success == false) {
    return <NotFound />
  } else {
    return <DefaultPage header={false} title={movie.title ?? movie.name ?? ""} >
        <MovieDetailsItem blurDataUrl={"/filme-backdrop-path.png"} displayItem={true} {...movie} />
    </DefaultPage>
  }
}
