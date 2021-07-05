import React, { useEffect, useState } from 'react';
import { 
    Container,
    Form,
    FormGroup, 
    Label, 
    Input,
    Button,
    Col,
    Table
} from 'reactstrap';

import TreeView from 'treeview-react-bootstrap';

const Products = () => 
{

    var data = [
        {
            text: "Euro Shelving",
            nodes: [
                {
                    text: "Product Manual",
                    nodes: [
                    {
                    text: "Manual"
                    },
                ]
                },
                {
                    text: "Assembly Instructions",
                    nodes: [
                    {
                        text: "Bay"
                    },
                    {
                        text: "Accessories"
                    },
                    {
                        text: "Door Kit"
                    },
                    {
                        text: "Louvrer Panels"
                    },
                    {
                        text: "Pull-outs"
                    },
                ]
                }
            ]
        },
        {
            text: "XL pallet Racking",
            nodes: [
                {
                    text: "Product Manual",
                    nodes: [
                    {
                    text: "XL Digest"
                    },
                ]
                },
                {
                    text: "Assembly Instructions",
                    nodes: [
                    {
                        text: "Assembly Guide"
                    },
                    {
                        text: "Installation Instructions"
                    },
                ]
                }
            ]
        }
      ];

    return(
        <Container>
        
            <h3 className="mb-3">
                Update Document Templates
            </h3>
            <Form>
                <FormGroup row className="mb-2">
                    <Label for="Channel" sm={2}>Language</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="Channel" required>
                        <option selected disabled hidden>Select Below</option>
                        <option> 1 </option>
                        <option> 2 </option>
                        </Input>
                    </Col>
                </FormGroup>
                <Label for="Channel" sm={2}>Product Support Information</Label>
                <TreeView data={data} />
                <Button type="submit">Apply</Button>
            </Form>
        </Container>
    );
}

export default Products;