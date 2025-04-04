import axios from "axios";

// Base URL and API configuration
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '518e37a8923580e9d6e4bcc45b84a104';
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MThlMzdhODkyMzU4MGU5ZDZlNGJjYzQ1Yjg0YTEwNCIsInN1YiI6IjY3ZWU4ZWU4MWQxY2NmNWY0ZjYyYWJlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HuD-yp1nzbWwLNc60B1G9QPFZ436uAWBx7EcbHL-Vcw';

// Create axios instance with default configuration
const tmdbApi = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
    'accept': 'application/json'
  }
});

// API functions
const getTrendingVideos = (timeWindow = 'day') => {
  // timeWindow can be 'day' or 'week'
  return tmdbApi.get(`/trending/movie/${timeWindow}`, {
    params: { api_key: apiKey }
  });
};

const getMovieDetails = (movieId) => {
  return tmdbApi.get(`/movie/${movieId}`, {
    params: { api_key: apiKey }
  });
};

const searchMovies = (query, page = 1) => {
  return tmdbApi.get('/search/movie', {
    params: {
      api_key: apiKey,
      query: query,
      page: page
    }
  });
};

// Usage examples
const fetchTrendingMovies = async () => {
  try {
    const response = await getTrendingVideos();
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

const fetchMovieById = async (movieId) => {
  try {
    const response = await getMovieDetails(movieId);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${movieId}:`, error);
    throw error;
  }
};

export default{
  tmdbApi,
  getTrendingVideos,
  getMovieDetails,
  searchMovies,
  fetchTrendingMovies,
  fetchMovieById
};