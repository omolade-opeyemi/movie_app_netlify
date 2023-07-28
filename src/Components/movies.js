import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './styles/movies.css'


const API_IMG = "https://image.tmdb.org/t/p/w500"

const Movies = ({ poster_path, title, overview, vote_average, release_date }) => {

    const [lgShow, setLgShow] = useState(false);
    const handleModal = () => setLgShow(!lgShow)
    return (

        <div className="card text-center bg-dark mb-3">
                <div className="card-body">
                    <img className="card-img-top Poster" alt="movie image" src={API_IMG + poster_path} />
                    <div className="card-body">
                        <Button type='button' className="btn btn-dark" onClick={handleModal}>View More</Button>
                    </div>

                </div>
                <Modal
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title >
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="card-img-top" alt="movie image" style={{ width: '100%' }} src={API_IMG + poster_path} />
                        <h3>{title}</h3>
                        <h4>IMDB : {vote_average}</h4>
                        <h5>Release Date : {release_date}</h5>
                        <br /><br />
                        <h6>Overview</h6>
                        <p>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default Movies