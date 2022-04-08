import DefaultPage from "components/patterns/DefaultPage";
import Section from "components/patterns/Section";
import MovieList from "components/patterns/MovieList";
import {MediaItemList} from "types/media";

export default function TrendingScreen(props:MediaItemList) {
  return (
    <DefaultPage title={"Trending Media"}>
      <Section title={"Movies"}>
        <MovieList {...props}/>
      </Section>
    </DefaultPage>
  )
}