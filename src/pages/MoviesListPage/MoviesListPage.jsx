import MovieCard from "./MovieCard/MovieCard"

export default function MoviesListPage({ movies }){




    return (
        <div>
            <h2>Movies List Page</h2>
            { movies.map((movie, idx) => (
                <MovieCard movie={movie} key={idx}/>

            ))
            }
       </div>

    )
}