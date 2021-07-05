import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

class ProductAttributesNavbar extends Component 
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
                            <Link to="/ProductAttributes" style={{ color: 'inherit', textDecoration: 'inherit'}}>Product Attributes</Link>
                        </NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}



export default ProductAttributesNavbar;