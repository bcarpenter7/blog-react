import './MovieCard.css'
// import { Link } from 'react-router-dom'

export default function MovieCard({ movie }){

    return (
        
        <div className="movieDiv">
            < div className="detailsDiv">
                <h1>{movie.title}</h1>
               
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