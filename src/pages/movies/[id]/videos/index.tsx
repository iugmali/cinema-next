import {getMovieVideos} from "data/movie";
import {GetServerSideProps} from "next";
import MovieVideos from "screens/MovieVideos";

export default MovieVideos;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = String(context.params?.id) ?? "12";
  const videos = await getMovieVideos(id);
  return {
    props: {
      videos: videos.results
    }
  }
}