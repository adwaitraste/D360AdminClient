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

class AppNavbar extends Component 
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
                <Navbar color="white" white expand="sm" className="mb-2">
                    <Container>
                        <NavbarBrand href="/d360admin">
                        <img
                            alt=""
                            src={process.env.PUBLIC_URL + '/Design360Logo.png'}
                            height="50"
                            className="d-inline-block align-top"
                        />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/Users" style={{ color: 'inherit', textDecoration: 'inherit'}}>Users</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CommonData" style={{ color: 'inherit', textDecoration: 'inherit'}}>Common Data</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CentralRepo" style={{ color: 'inherit', textDecoration: 'inherit'}}>Central Repo</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/ProductAttributes" style={{ color: 'inherit', textDecoration: 'inherit'}}>Product Attributes</Link>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <NavbarBrand href="/d360admin">
                        <img
                            alt=""
                            src={process.env.PUBLIC_URL + '/WhittanLogo.jpg'}
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        </NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}



export default AppNavbar;