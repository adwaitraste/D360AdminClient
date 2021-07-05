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

const Tidy = () => 
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
                Delete Projects Forever
            </h3>
            <Form>
                <Label><h5>Projects</h5></Label>
                <Table>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Description</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">D360-1111-1111</td>
                            <td>Racking for ABC</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                <Button type="submit">Delete</Button>
            </Form>
        </Container>
    );
}

export default Tidy;