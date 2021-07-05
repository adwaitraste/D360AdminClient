import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, 
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

class UsersNavbar extends Component 
{
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }); 
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-2">
                    <Container>
                        <NavbarBrand>
                            <Link to="/Users" style={{ color: 'inherit', textDecoration: 'inherit'}}>Users</Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/Users/AddUser" style={{ color: 'inherit', textDecoration: 'inherit'}}>Add</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/Users/EditUser" style={{ color: 'inherit', textDecoration: 'inherit'}}>Edit</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/Users/CopyUser" style={{ color: 'inherit', textDecoration: 'inherit'}}>Copy</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/Users/DeleteUser" style={{ color: 'inherit', textDecoration: 'inherit'}}>Delete</Link>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}



export default UsersNavbar;