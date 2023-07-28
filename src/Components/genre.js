import React from 'react'
import './styles/genre.css'
import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../Context/DataContext';



const Genre = () => {
  const {genres,onTagClick,selectedGenres} = useContext(DataContext);



    return (
        <div className="container">
        <h2 className="genreHeader">Get Top Movies Based On Genre </h2>
        <div className="buttonGrid">
          {genres.map((genre) => (
            <div
              key={genre.id}
              onClick={() => onTagClick(genre.id)}
              className={
                selectedGenres.includes(genre.id)
                  ? "genreTagON"
                  : "genreTagOFF"
              }
            >
              {genre.name}
              {selectedGenres.includes(genre.id) ? (

                <FaTimes />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    )
}

export default Genre;