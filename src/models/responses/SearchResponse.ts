import { Movie } from "../movies";

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}