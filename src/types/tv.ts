import {MediaItem} from "./media";

export interface Series extends MediaItem{
  name: string;
  first_air_date: string;
}
