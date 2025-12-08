import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import {FaPlus} from "react-icons/fa";

import styles from './styles.module.css';

function FeaturedMovie({movie={}, isCompact=true})
{
    const {poster_path, title="", overview} = movie;

    return (
        <div className={styles.movieWrapper}>
            <h1 className={styles.movieTitle}>{title}</h1>
            <p 
                className={`${styles.overview} ${isCompact ? styles.shortOverview: ""}`}>
                {overview}
            </p>
            <div className={styles.actionButtons}>
                <Link className={styles.palyButton} href={`/movie/${movie.id}`}>
                Play
                </Link>
                <button className={styles.addButton}>
                    <FaPlus/>
                </button>
            </div>
            <div className={styles.moviePoster}>
                <div className={styles.moviePosterOverlay}></div>
                    <Image alt={title}
                        unoptimized
                        src={`https://image.tmdb.ord/t/p/original${poster_path}`}
                        fill
                    />
            </div>
        </div>
    );
}

export default FeaturedMovie;