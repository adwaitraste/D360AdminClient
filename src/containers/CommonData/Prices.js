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
import { useFilePicker } from 'use-file-picker';

const Prices = () => 
{

    const [
        openFileSelector,
        { filesContent, loading, errors, plainFiles }
      ] = useFilePicker({
        multiple: true,
        readAs: "DataURL", // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
        // accept: '.ics,.pdf',
        accept: [".json", ".pdf"],
        limitFilesConfig: { min: 2, max: 3 }
        // minFileSize: 1, // in megabytes
        // maxFileSize: 1,
        // maxImageHeight: 1024, // in pixels
        // minImageHeight: 1024,
        // maxImageWidth: 768,
        // minImageWidth: 768
        // readFilesContent: false, // ignores file content
      });


    return(
        <Container>
        
            <h3 className="mb-3">
                Update Prices Databases
            </h3>
            <Form>
                <FormGroup row className="mb-2">
                    <Label for="Channel" sm={2}>Select Channel</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="Channel" required>
                        <option selected disabled hidden>Select Below</option>
                        <option> 1 </option>
                        <option> 2 </option>
                        </Input>
                    </Col>
                </FormGroup>
                <Label><h5>Price History</h5></Label>
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
                    <Label for="Channel" sm={2}>New Price Database</Label>
                    <Col sm={10}>
                        {/* <Input type="select" name="select" id="Channel" required>
                        <option selected disabled hidden>Select Below</option>
                        <option> 1 </option>
                        <option> 2 </option>
                        </Input> */}
                        <button onClick={() => openFileSelector()}>Select Price Database</button>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Mobile" sm={2}>Comment</Label>
                    <Col sm={10}>
                    <Input type="text" name="Mobile" id="Mobile"/>
                    </Col>
                </FormGroup>
                <Button type="submit">Apply</Button>
            </Form>
        </Container>
    );
}

export default Prices;