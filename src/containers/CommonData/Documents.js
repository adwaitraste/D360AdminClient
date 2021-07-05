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

const Documents = () => 
{
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
                <Label><h5>Drawing Templates</h5></Label>
                <Table>
                    <thead>
                        <tr>
                            <th>Template</th>
                            <th>Current Document</th>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Link51 Dwg</td> 
                            <td>Link51.dwt</td>
                        </tr>
                        <tr>
                            <td scope="row">Link51 Trade Dwg</td>
                            <td>Link51Trade.dwt</td>
                        </tr>
                    </tbody>
                </Table>
                <Label><h5>Document Templates</h5></Label>
                <Table>
                    <thead>
                        <tr>
                            <th>Template</th>
                            <th>Current Document</th>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Link51 Quotation</td>
                            <td>Link51 Quote Issue1.docx</td>
                        </tr>
                        <tr>
                            <td scope="row">Link51 Trade Quotation</td>
                            <td>Link51 Trade Quote Issue1.docx</td>
                        </tr>
                    </tbody>
                </Table>
                <Button type="submit">Apply</Button>
            </Form>
        </Container>
    );
}

export default Documents;