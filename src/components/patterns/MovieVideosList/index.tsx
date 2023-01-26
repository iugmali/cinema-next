import styles from './MovieVideos.module.scss';
import VideoItem from "../../Itens/VideoItem";
import {MovieVideoItem} from "../../../types/movie";

export default function MovieVideos(videos: MovieVideoItem[]) {
  return (
    <section className={styles.videos}>
      {videos.map(video => (video.site === "YouTube") && (
        <VideoItem key={video.id} name={video.name} videoKey={video.key} site={video.site} id={video.id} />
      ))}
    </section>
  );
}