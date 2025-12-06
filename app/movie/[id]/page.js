import React from "react";
import {notFound} from "next/navigation";

import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

async function delay(ms)
{
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function MoviePage({params, searchParams})
{
    await delay(2000);
    const movieDetail = Movies.results.find(
        (movie) => movie.id === Number(params.id)
    );

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