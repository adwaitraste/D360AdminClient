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

const Parts = () => 
{
    return(
        <Container>
        
            <h3 className="mb-3">
                Update Part Availability
            </h3>
            <Form>
                <Label><h5>Availability History</h5></Label>
                <Table>
                    <thead>
                        <tr>
                            <th>Date Changed</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">2019/01/01</td>
                            <td>Comment 4</td>
                        </tr>
                        <tr>
                            <td scope="row">2018/01/01</td>
                            <td>Comment 3</td>
                        </tr>
                        <tr>
                            <td scope="row">2017/01/01</td>
                            <td>Comment 2</td>
                        </tr>
                        <tr>
                            <td scope="row">2016/01/01</td>
                            <td>Comment 1</td>
                        </tr>
                    </tbody>
                </Table>
                <FormGroup row className="mb-2">
                    <Label for="Channel" sm={2}>New Availability Database</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="Channel" required>
                        <option selected disabled hidden>Select Below</option>
                        <option> 1 </option>
                        <option> 2 </option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Mobile" sm={2}>Comment</Label>
                    <Col sm={10}>
                    <Input type="text" name="Mobile" id="Mobile" required/>
                    </Col>
                </FormGroup>
                <Button type="submit">Apply</Button>
            </Form>
        </Container>
    );
}

export default Parts;