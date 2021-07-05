import React, { useEffect, useState } from 'react';
import { 
    Container,
    Button,
    FormGroup
} from 'reactstrap';
import ProductAttributesNavbar from '../../components/ProductAttributes';


const ProductAttributesContainer = () =>
{
    return(
        <Container>
            <ProductAttributesNavbar />
            <br/>
            <Button>Euro</Button>
            <br/><br/>
            <Button>Stormor</Button>
            <br/><br/>
            <Button>More</Button>
        </Container>
    );
}

export default ProductAttributesContainer;