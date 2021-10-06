import {Image} from "./image";

export class Article {
  id?: number;
  title?: string;
  description?: string;
  duration?: string;
  releaseDate: string = "2021-10-02T01:00:03";
  images?: Image[];
}
