import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavigationBar = ()=>{

  
    return(
        <Container>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"> Monies</Navbar.Brand>
                
        </Navbar>
        </Container>
    )
}


export default NavigationBar