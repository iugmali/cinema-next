import TrendingScreen from "screens/TrendingScreen";
import {getTrendingMovies, getTrendingPeople, getTrendingTV} from "data/trending";
import {GetServerSideProps} from "next";

export default TrendingScreen;

export const getServerSideProps:GetServerSideProps = async () => {
  let movies;
  let tv;
  let people;
  const moviesResponse = await getTrendingMovies();
  if (moviesResponse) {
    movies = moviesResponse.data;
  } else {
    movies = {};
  }
  const tvResponse = await getTrendingTV();
  if (tvResponse) {
    tv = tvResponse.data;
  } else {
    tv = {};
  }
  const peopleResponse = await getTrendingPeople();
  if (peopleResponse) {
    people = peopleResponse.data;
  } else {
    people = {};
  }
  return {
    props: {
      movies,
      tv,
      people
    }
  }
}
