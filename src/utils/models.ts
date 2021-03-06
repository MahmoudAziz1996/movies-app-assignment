export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export type MovieResponse = {
  page: number;
  dates: {maximum: string; minimum: string};
  results: Array<Movie>;
};

export type Creditsesponse = {
  id: number;
  cast: Array<Cast>;
};

export type Genre = {
  id: number;
  name: Array<Cast>;
};

export type GenreResponse = {
  genres: Array<Genre>;
};

export type GenresReducer = {
  genres: Array<Genre>;
  isFetching: boolean;
  error: boolean;
};

export type MovierReducer = {
  movies: Array<Movie>;
  isFetching: boolean;
  error: boolean;
};

export type RouteParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
};
