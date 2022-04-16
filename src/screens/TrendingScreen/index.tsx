import DefaultPage from "components/patterns/DefaultPage";
import Section from "components/patterns/Section";
import MovieList from "components/patterns/MovieList";
import {MediaItemData} from "types/media";

export default function TrendingScreen(props:MediaItemData) {
  return (
    <DefaultPage title={"Trending Media"}>
      <Section title={""}>
        <MovieList {...props}/>
      </Section>
    </DefaultPage>
  )
}