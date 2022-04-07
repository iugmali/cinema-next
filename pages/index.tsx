import HomeScreen from "screens/HomeScreen";
import {getTrendingMovies, getTrendingPerson, getTrendingTV} from "data/trending";
import {GetServerSideProps} from "next";

export default HomeScreen;

export const getServerSideProps:GetServerSideProps = async () => {
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