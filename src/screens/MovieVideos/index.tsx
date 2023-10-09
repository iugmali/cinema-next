import DefaultPage from "components/patterns/DefaultPage";
import Section from "components/patterns/Section";
import MovieVideosList from "../../components/patterns/MovieVideosList";
import {VideoItemData} from "../../types/media";

export default function MovieVideos(props:VideoItemData) {
  return (
    <DefaultPage title={"Trending Media"}>
      <Section title={""}>
        <MovieVideosList {...props} />
      </Section>
    </DefaultPage>
  )
}