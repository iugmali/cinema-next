import HomeScreen from "screens/HomeScreen";
import {getTrendingMovies, getTrendingPerson, getTrendingTV} from "data/trending";

export default HomeScreen;

export async function getStaticProps() {
  const movies = await getTrendingMovies();
  const series = await getTrendingTV();
  const people = await getTrendingPerson();
  return {
    props: {
      movies,
      series,
      people
    }
  }
}