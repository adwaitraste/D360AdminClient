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

class CentralRepoNavbar extends Component 
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
                            <Link to="/CentralRepo" style={{ color: 'inherit', textDecoration: 'inherit'}}>Central Repo</Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CentralRepo/Backup" style={{ color: 'inherit', textDecoration: 'inherit'}}>Backup</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CentralRepo/Archive" style={{ color: 'inherit', textDecoration: 'inherit'}}>Archive</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CentralRepo/Move" style={{ color: 'inherit', textDecoration: 'inherit'}}>Move</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/CentralRepo/Tidy" style={{ color: 'inherit', textDecoration: 'inherit'}}>Tidy</Link>
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



export default CentralRepoNavbar;