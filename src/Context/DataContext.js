import { createContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
// import data from '../Components/data';
import data from '../Components/data'


const API_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=3cab2543ba1aed5ce5d6eb68193ecd8a"

const apiKey = "api_key=3cab2543ba1aed5ce5d6eb68193ecd8a"

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState(JSON.parse(localStorage.getItem('selectedGenres')) || []);
  const [currMovies, setCurrMovies] = useState([{}]);
  const [query, setQuery] = useState('');

  useEffect(() => {

    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setGenres(data.genres);
      })
  }, []);

  // useEffect(() => {
  //   const fetchGenre = async () => {
  //     try {
  //       const response = await data.get('fetchGeres')
  //       setGenres(response.genres);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchGenre();
  // }, []);


  useEffect(() => {
    setCurrMovies([]);
    if (selectedGenres.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${apiKey}&release_date.lte=2019-12-12&with_genres=${encodeURI(
          selectedGenres.join(",")
        )}`
      ).then((Response) => Response.json())
        .then(data => {
          setCurrMovies(data.results)
        });
    }
    localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));

  }, [selectedGenres]);

  const onTagClick = (genreId) => {
    let isPresent = false;
    for (let id of selectedGenres) {
      if (id === genreId) {
        isPresent = true;
        break;
      }
    }
    if (isPresent) {
      setSelectedGenres(
        selectedGenres.filter((item) => item !== genreId));
      localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));

    } else {
      setSelectedGenres((selectedGenres) => [...selectedGenres, genreId]);
    }
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?${apiKey}&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setCurrMovies(data.results);
    }
    catch (e) {
      console.log(e.message);
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  return (
    <DataContext.Provider value={{
      searchMovie,
      changeHandler,
      query,
      genres,
      onTagClick,
      selectedGenres,
      currMovies

    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;