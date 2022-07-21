import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({checkedCount}) => {
    return (
        <Navbar bg="primary" variant="dark" fixed="top" className='mb-5'>
        <Container>
          <Navbar.Brand href="#">Image Gallery</Navbar.Brand>
          <Nav className="me-right">
            <div className='selectedItems'>Selected items <span>{checkedCount}</span></div>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;