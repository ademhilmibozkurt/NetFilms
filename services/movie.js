const API_URL = 'https://api.themoviedb.org/3'

const fetchMovieApi = async (pathname, query="") =>{
    const res = await fetch(
        `${API_URL}${pathname}?api_key=${process.env.API_KEY}${query}`
    );
    return res.json();
};

const getTopRatedMovies = async () =>
{
    return fetchMovieApi('/movie/top_rated', "&page=1");
};

const getPopularMovies = async () =>
{
    return fetchMovieApi('/movie/popular', '&page=1');
};

const getCategories = async () =>
{
    return fetchMovieApi('/genre/movie/list', '')
};

const getSingleCategory = async (genreId) =>
{
    return fetchMovieApi('/discover/movie', `&with_genres=${genreId}`)
};

export { fetchMovieApi, getTopRatedMovies, getPopularMovies, getCategories, getSingleCategory}