import {MediaItem} from "./media";

export interface Movie extends MediaItem{
  title: string;
  release_date: string;
}