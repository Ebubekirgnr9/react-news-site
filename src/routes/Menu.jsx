import { Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
import logo from './logo.svg';
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
export default function Menu() {
    return ( 
        <Fragment>
        <Navbar bg="black" expand="xl">
        <Container >
          <Navbar.Brand href="#" className=''>
            <img src={logo} className="App-logo img-fluid" width={150} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-white text-danger' />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto  my-lg-0 text-uppercase ">

              <Nav.Link href="/" className='text-white'>Home</Nav.Link>
              <Nav.Link href="/Sports" className='text-white'>Sports</Nav.Link>



            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Haberleri Ara"
                className="me-2 text-uppercase "
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
              <Outlet />
              </Fragment>
     );
}
