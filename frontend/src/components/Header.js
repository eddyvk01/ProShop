import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} =userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand >Pro-Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <SearchBox />
          </Nav>
          <Nav>
          <LinkContainer to='/cart'>
              <Nav.Link ><i className='fas fa-shopping-cart'>Cart</i></Nav.Link>
            </ LinkContainer>

            {userInfo ? (
              <NavDropdown title = {userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick = {logoutHandler}>Logout</NavDropdown.Item>

              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
              <Nav.Link ><i className='fas fa-user'>Login</i></Nav.Link>
            </LinkContainer>
            )}

           {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;