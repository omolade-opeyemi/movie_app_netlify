import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useContext } from 'react';
import DataContext from '../Context/DataContext';


const NavbarComponent = () => {
    const {searchMovie,changeHandler,query} = useContext(DataContext);
    return (
        <div>
            <Navbar bg='dark' expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/home">Lights on Height</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

                    <Navbar.Collapse id="nabarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll></Nav>

                        <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
                            <FormControl
                                type="search"
                                placeholder="Movie Search"
                                className="me-2"
                                aria-label="search"
                                name="query"
                                value={query} onChange={changeHandler}></FormControl>
                            <Button variant="secondary" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar></div>
    )
}

export default NavbarComponent