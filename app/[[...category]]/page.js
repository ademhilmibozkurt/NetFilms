// [[...category]] is optinal catch all routes
// movie/page.js will remove because prevent possible page.js render conflict

import React from 'react';
import HomeContainer from '@/containers/home';
import { getTopRatedMovies, getPopularMovies, getCategories, getSingleCategory } from '@/services/movie';

async function HomePage({params})
{
    let selectedCategory;

    // use promises for not conflicting data fetching.
    // this method will not wait for each api call.
    const [{results: topRatedMovies}, {results: popularMovies}, {genres: categories}] = 
        await Promise.all([getTopRatedMovies(), getPopularMovies(), getCategories()]);

    if(params.categories?.length > 0)
    {
        const {results} = await getSingleCategory(params.categories[0]);
        selectedCategory = results;
    }

    return (    
        <HomeContainer
            topRatedMovies={topRatedMovies}
            popularMovies={popularMovies}
            categories={categories}
            selectedCategory={
                {
                    id    : params.categories?.[0] ?? "",
                    movies: selectedCategory ? selectedCategory.slice(0,7) : [],
                }}/>
    );
}

export default HomePage;