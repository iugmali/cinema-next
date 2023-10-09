import styles from './MovieVideosList.module.scss';
import VideoItem from "../../Itens/VideoItem";
import {VideoItemData} from "../../../types/media";

export default function MovieVideosList({videos}: VideoItemData) {
  return (
    <section className={styles.videos}>
      {videos && videos.map(video => {
        return (
            <VideoItem key={video.id} name={video.name} videoKey={video.key} site={video.site} id={video.id}/>
        );
      })}
    </section>
  );
}