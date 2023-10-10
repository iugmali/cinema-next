import {getMovieVideos} from "data/movie";
import {GetServerSideProps} from "next";
import MovieVideos from "screens/MovieVideos";

export default MovieVideos;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = String(context.params?.id) ?? "12";

  let movieVideos;

  const movieVideosResponse = await getMovieVideos(id);
  if (movieVideosResponse) {
    movieVideos = movieVideosResponse.data;
  } else {
    movieVideos = {results: []};
  }

  return {
    props: {
      videos: movieVideos.results
    }
  }
}
