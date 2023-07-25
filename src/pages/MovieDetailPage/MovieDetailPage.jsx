


export default function MovieDetailPage({ movie }){

    return (
        
        <div className="movieDiv">
            < div className="detailsDiv">
                <h1>{movie.title}</h1>
                {/* <link to={/movies/:id}>Click to View</link> */}
                <div className="flex">{movie.cast.map(c => (
                    <p>{c} </p>
                ))}
                </div>
                <h3>Release Date: {movie.releaseDate}</h3>
            </div>
           
            <div className="posterDiv">
                <img src={movie.posterPath}></img>
            </div>
            
          
        </div>
        


    )
}

