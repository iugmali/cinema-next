import {MediaItem} from "./media";

export interface Person {
  id: string;
  profile_path: string;
  name: string;
  known_for_department: string;
  known_for: MediaItem[];
}