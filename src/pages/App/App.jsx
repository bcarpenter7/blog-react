import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { movies } from "../../data.js";

import ActorListPage from '../ActorListPage/ActorListPage'
import LoginPage from '../LoginPage/LoginPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar />
          <Routes>
            {/* Route Components in here */}
            {
              <>
            <Route path="/" element={<MoviesListPage movies={movies} />}/>
            <Route path="/movies/:movieName" element={<MovieDetailPage />}/> 
            </>
            // <Route path="/actors" element={<ActorListPage />}/>
           
            
            }
          </Routes>
        </>
        :
        <LoginPage setUser={setUser} user={user}/>
      }
    </main>
  );
}

