import {Serie} from "./serie";
import {Movie} from "./movie";
import {Person} from "./person";

export interface MediaItem {
  title?: string;
  name?: string;
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