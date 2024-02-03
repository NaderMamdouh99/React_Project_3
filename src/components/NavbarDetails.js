import React, { useState } from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'

const NavbarDetails = ({ filterSearch }) => {
    // Search with input Search in Navbar
    const [searchInput, setSearchInput] = useState('');
    const buttonSearch = (e) => {
        e.preventDefault();
        filterSearch(searchInput);
        setSearchInput('')
    }
    // Return Navbar  
    return (
        <div>
            <Navbar expand="lg" bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#">
                        <div className='brand-color'>مطعم 23 يوليو</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="ابحث..."
                                className="mx-2"
                                onChange={(e) => {
                                    setSearchInput(e.target.value)
                                }}
                                value={searchInput}
                            />
                            <button onClick={buttonSearch} className='btn-search'>بحث</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarDetails
