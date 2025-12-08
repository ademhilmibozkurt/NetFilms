import React from "react";
import {notFound} from "next/navigation";

import MovieContainer from "@/containers/movie";

const API_URL = 'https://api.themoviedb.org/3'

const getMovie = async (movieId) =>
{
    const res = await fetch(`${API_URL}/discover/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return res.json();
};

async function MoviePage({params, searchParams})
{
    const movieDetail = await getMovie(params.movieId);

    if (!movieDetail)
    {
        notFound();
    }

    if (searchParams.error === "true")
    {
        throw new Error("Error occured!");
    }

    return <MovieContainer movie={movieDetail}/>
}

export default MoviePage;