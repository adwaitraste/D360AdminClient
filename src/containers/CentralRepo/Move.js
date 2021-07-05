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

const Move = () => 
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
                Move Central Repository Folder
            </h3>
            <Form>
                <FormGroup row className="mb-2">
                    <Label for="Channel" sm={4}>Current Central Repository Folder</Label>
                    <Col sm={8}>
                        <Label>X:\D360\CentralRepo</Label>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Channel" sm={4}>New Central Repository Folder</Label>
                    <Col sm={8}>
                        <button onClick={() => openFileSelector()}>Select Folder</button>
                    </Col>
                </FormGroup>
                <Button type="submit">Move</Button>
            </Form>
        </Container>
    );
}

export default Move;