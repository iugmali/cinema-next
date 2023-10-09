import {getMovieDetails} from "../../../data/movie";
import {GetServerSideProps} from "next";
import MoviePage from "screens/MoviePage";
import {Movie} from "../../../types/movie";

export default MoviePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params ? typeof context.params.id === "string" ? context.params.id : "12" : "12";
  const movie:Movie = await getMovieDetails(id);
  return {
    props: {
      movie: movie
    }
  }
}