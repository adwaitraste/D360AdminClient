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

const Archive = () => 
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
                Archive Projects
            </h3>
            <Form>
            <FormGroup row className="mb-2">
                    <Label for="Channel" sm={2}>Channels</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="Channel"  required>
                        <option selected disabled hidden>Select Below</option>
                        <option>1</option>
                        <option>2</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Channel" sm={4}>Set Archive folder</Label>
                    <Col sm={8}>
                        <button onClick={() => openFileSelector()}>Select Folder</button>
                    </Col>
                </FormGroup>
                <Label><h5>Select Projects to Archive / Unarchive</h5></Label>
                <Table>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Description</th>
                            <th>Archived</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">D360-1111-1111</td>
                            <td>Racking for ABC</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                <Button type="submit">Archive</Button>
            </Form>
        </Container>
    );
}

export default Archive;