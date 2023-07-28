import axios from 'axios';

const API_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=3cab2543ba1aed5ce5d6eb68193ecd8a"

export default axios.create({
    fetchGeres: API_URL,
})