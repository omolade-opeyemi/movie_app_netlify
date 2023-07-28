import React from 'react'
import Movies from './movies';
import './styles/moviesbody.css'
import { useContext } from 'react';
import DataContext from '../Context/DataContext';


const Moviesbody = () => {
  const {currMovies} = useContext(DataContext);

  return (
    <div className="container">
        <div className="grid">
          {currMovies.map((movie) =>
            <div key={movie.id}>
              <Movies {...movie} />
            </div>
          )}
        </div>
      </div>
  )
}

export default Moviesbody