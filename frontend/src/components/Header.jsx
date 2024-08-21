import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
//import { useLogoutMutation } from '../slices/usersApiSlice';
//import { logout } from '../slices/authSlice';

const Header = () => {

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
	    <LinkContainer to='/'>
		<Navbar.Brand>Almoon</Navbar.Brand>
	    </LinkContainer>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ms-auto'>
			    <LinkContainer to='/login'>
				<Nav.Link>
					<FaSignInAlt /> Sign In
				</Nav.Link>
			    </LinkContainer>
			    <LinkContainer to='/register'>
				<Nav.Link>
					<FaSignOutAlt /> Register
				</Nav.Link>
			    </LinkContainer>
			</Nav>
		</Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
