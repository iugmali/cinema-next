import {Serie} from "./serie";
import {Movie} from "./movie";
import {Person} from "./person";

export interface MediaItem {
  first_air_date?: string;
  release_date?: string;
  title?: string;
  name?: string;
  id: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
}

export interface MediaItemList {
  movies?: {
    results: Movie[]
  };
  series?: {
    results: Serie[]
  };
  people?: {
    results: Person[]
  };
}