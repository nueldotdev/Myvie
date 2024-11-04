import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const POPULAR = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';



const API_OPTIONS = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ACCESS_TOKEN',
  },
};


// {
//       "adult": false,
//       "backdrop_path": "/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
//       "genre_ids": [
//         27,
//         53
//       ],
//       "id": 1034541,
//       "original_language": "en",
//       "original_title": "Terrifier 3",
//       "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
//       "popularity": 6336.348,
//       "poster_path": "/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
//       "release_date": "2024-10-09",
//       "title": "Terrifier 3",
//       "video": false,
//       "vote_average": 7.3,
//       "vote_count": 509
//     }

// Define a type for the movie data structure based on TMDb's response
export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  genre_ids: [];
  adult: boolean;
  video: boolean;
  popularity: number;
  vote_average: number;
  [key: string]: any; // Allows for any additional fields in the response
}

// Define a function to fetch movies with proper typing
export const fetchNowPlayingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get<{ results: Movie[] }>(API_URL, API_OPTIONS);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchTopRatedMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get<{ results: Movie[] }>(TOP_RATED, API_OPTIONS);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get<{ results: Movie[] }>(POPULAR, API_OPTIONS);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get<{ results: Movie[] }>(UPCOMING, API_OPTIONS);
    return response.data.results;
  } catch (error) {
    console.error('Error fecthing movies:', error);
    throw error;
  }
}