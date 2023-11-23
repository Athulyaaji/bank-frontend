import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">
           
            <i class="fa-brands fa-slack fa-beat fa-2xl" style={{color:'black'}}></i>
            <a style={{ textDecoration: 'none',color:'black',fontWeight:'bold',fontFamily:'cursive' }} className='ms-2' >STATEMENT</a>

            
            </Navbar.Brand>
            <Link to={"/add"} xs="auto">
            <Button style={{border:'none',color:"success",backgroundColor:'green',padding:'10px 20px',borderRadius:'10px'}}  type="submit">
            <i class="fa-solid fa-square-plus fa-bounce fa-lg"></i> ADD</Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header