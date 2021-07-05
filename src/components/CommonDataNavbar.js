import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Container,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class CommonDataNavbar extends Component 
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
                            <Link to="/CommonData" style={{ color: 'inherit', textDecoration: 'inherit'}}>Common Data</Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CommonData/Prices" style={{ color: 'inherit', textDecoration: 'inherit'}}>Prices</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CommonData/Parts" style={{ color: 'inherit', textDecoration: 'inherit'}}>Parts</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CommonData/Customers" style={{ color: 'inherit', textDecoration: 'inherit'}}>Customers</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CommonData/Products" style={{ color: 'inherit', textDecoration: 'inherit'}}>Products</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CommonData/Documents" style={{ color: 'inherit', textDecoration: 'inherit'}}>Documents</Link>
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



export default CommonDataNavbar;