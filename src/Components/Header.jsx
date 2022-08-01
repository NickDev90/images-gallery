import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Header = ({checkedItems, filterItems}) => {

  const navigate = useNavigate();

  return (
        <Navbar bg="primary" variant="dark" fixed="top" className='mb-5'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='brand__link'>Image Gallery</Link> 
          </Navbar.Brand>
          <Nav className="me-right selectedCount">
            <div className='selectedItems' 
              title='Show selected items'
              onClick={() => {
                filterItems();
                navigate('selected');
              }}
            >
                Selected items: <span>{checkedItems.length}</span>
            </div>
            {/* <div className="clearCart" title="Clear selections">
              <FaTrashAlt className='trashBox'/>
            </div> */}
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;