import React, { useEffect, useState } from 'react';
import { 
    Container,
    Form,
    FormGroup, 
    Label, 
    Input,
    Button,
    Col,
} from 'reactstrap';
import { addUser, editUser, getUsers } from '../../services/users';
import { getChannels, getSalesGroups, getSalesOffices, getUserFullnamesAndID } from '../../services/services';


const CopyUser = () =>
{

    const [FirstName,       setFirstName]   = useState();
    const [LastName,        setLastName]    = useState();
    const [ChannelID,       setChannelID]    = useState();
    const [SalesPersonID,   setSalesPersonID] = useState();
    const [DesignerID,      setDesignerID]    = useState();
    const [SalesOfficeID,   setSalesOfficeID] = useState();
    const [SalesGroupID,    setSalesGroupID]  = useState();
    const [Company,         setCompany]     = useState();
    const [Position,        setPosition]    = useState();
    const [Telephone,       setTelephone]   = useState();
    const [Mobile,          setMobile]      = useState();
    const [Email,           setEmail]       = useState();
    
    const [Channels,        setChannels]        = useState([]);
    const [SalesOffices,    setSalesOffices]    = useState([]);
    const [SalesGroups,     setSalesGroups]     = useState([]);
    const [Users,           setUsers]           = useState([]);
    const [currentUserID,   setcurrentUserID]   = useState();

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        getChannels()
        .then(data => {
            setChannels(data);
        });

        getSalesOffices()
        .then(data => {
            setSalesOffices(data);
        });

        getSalesGroups()
        .then(data => {
            setSalesGroups(data);
        });

        getUsers()
        .then(data => {
            setUsers(data);
        });

    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = createCurrentUserObject();
        addUser(currentUser)
        .then(data => {
            if(data.FirstName)
            {
                alert("User Copied")
                window.location.reload();
            }
            else
                setErrorMessage(JSON.stringify(data, null, 2))
            
        });
        
    };

    const handleEdit = (e) => {
        e.preventDefault();
        let currentUserArray= Users.filter(el => el.id == currentUserID);
        if(currentUserArray[0])
        {
            setFirstName(currentUserArray[0].FirstName);
            setLastName(currentUserArray[0].LastName);
            setChannelID(currentUserArray[0].ChannelID);
            setSalesPersonID(currentUserArray[0].SalesPersonID);
            setDesignerID(currentUserArray[0].DesignerID);
            setSalesOfficeID(currentUserArray[0].SalesOfficeID);
            setSalesGroupID(currentUserArray[0].SalesGroupID);
            setCompany(currentUserArray[0].Company);
            setPosition(currentUserArray[0].Position);
            setTelephone(currentUserArray[0].Telephone);
            setMobile(currentUserArray[0].Mobile);
            setEmail(currentUserArray[0].Email);
        }
    }


    function createCurrentUserObject()
    {
        let currentUser = {
            FirstName: FirstName,
            LastName: LastName,
            isActive: '1',
            ChannelID: ChannelID,
            SalesPersonID: SalesPersonID,
            DesignerID: DesignerID,
            SalesOfficeID: SalesOfficeID,
            SalesGroupID: SalesGroupID,
            Company: Company,
            Position: Position,
            Telephone: Telephone,
            Mobile: Mobile,
            Email: Email
        }
        return currentUser;
    }

    useEffect(() => {
        let currentUserArray= Users.filter(el => el.id == currentUserID);
        if(currentUserArray[0])
        {
            setFirstName(currentUserArray[0].FirstName);
            setLastName(currentUserArray[0].LastName);
            setChannelID(currentUserArray[0].ChannelID);
            setSalesPersonID(currentUserArray[0].SalesPersonID);
            setDesignerID(currentUserArray[0].DesignerID);
            setSalesOfficeID(currentUserArray[0].SalesOfficeID);
            setSalesGroupID(currentUserArray[0].SalesGroupID);
            setCompany(currentUserArray[0].Company);
            setPosition(currentUserArray[0].Position);
            setTelephone(currentUserArray[0].Telephone);
            setMobile(currentUserArray[0].Mobile);
            setEmail(currentUserArray[0].Email);
        }
    }, [currentUserID]);


    return(
        <Container>
            <h3>
                Copy User
            </h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup row className="mb-2">
                    <Label for="SelectUser" sm={2}>Select User</Label>
                    <Col sm={10}>
                        <Input type="select" name="SelectUser" id="SelectUser" value={ currentUserID  } onChange={e => setcurrentUserID (e.target.value)} required>
                        <option selected disabled hidden>Select Below</option>
                        {
                            Users.map(e => {
                                return <option value={e.id}>{e.FirstName + " " + e.LastName}</option>
                            })
                        }
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="FirstName" sm={2}>First Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="FirstName" id="FirstName" placeholder="First Name" value={ FirstName } onChange={e => setFirstName(e.target.value)} required/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2" >
                    <Label for="LastName" sm={2}>Last Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="LastName" id="LastName" placeholder="Last Name" value={ LastName } onChange={e => setLastName(e.target.value)} required/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Channel" sm={2}>Channels</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="Channel" value={ ChannelID } onChange={e => setChannelID (e.target.value)} required>
                        <option selected disabled hidden>Select Below</option>
                        {
                            Channels.map(e => {
                                return <option value={e.id}>{e.Name}</option>
                            })
                        }
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="SalesPerson" sm={2}>Sales Person</Label>
                    <Col sm={10}>
                        <Input type="select" name="SalesPerson" id="SalesPerson" value={ SalesPersonID  } onChange={e => setSalesPersonID (e.target.value)} required>
                        <option selected disabled hidden>Select Below</option>
                        <option value = "0">Current User</option>
                        {
                            Users.map(e => {
                                return <option value={e.id}>{e.FirstName + " " + e.LastName}</option>
                            })
                        }
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Designer" sm={2}>Designer</Label>
                    <Col sm={10}>
                        <Input type="select" name="Designer" id="Designer" value={ DesignerID  } onChange={e => setDesignerID (e.target.value)} required>
                        <option selected disabled hidden>Select Below</option>
                        <option value = "0">Current User</option>
                        {
                            Users.map(e => {
                                return <option value={e.id}>{e.FirstName + " " + e.LastName}</option>
                            })
                        }
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="SalesOffice" sm={2}>Sales Office</Label>
                    <Col sm={10}>
                        <Input type="select" name="SalesOffice" id="SalesOffice" value={ SalesOfficeID  } onChange={e => setSalesOfficeID (e.target.value)} required>
                        <option selected disabled hidden>Select Below</option>
                        {
                            SalesOffices.map(e => {
                                return <option value={e.id}>{e.Name}</option>
                            })
                        }
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="SalesGroup" sm={2}>Sales Group</Label>
                    <Col sm={10}>
                        <Input type="select" name="SalesGroup" id="SalesGroup" value={ SalesGroupID } onChange={e => setSalesGroupID (e.target.value)} required>
                        <option selected disabled hidden>Select Below</option>
                        {
                            SalesGroups.map(e => {
                                return <option value={e.id}>{e.Name}</option>
                            })
                        }
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Company" sm={2}>Company</Label>
                    <Col sm={10}>
                        <Input type="text" name="Company" id="Company" placeholder="Company" value={ Company } onChange={e => setCompany(e.target.value)} required/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Position" sm={2}>Position</Label>
                    <Col sm={10}>
                        <Input type="text" name="Position" id="Position" placeholder="Position" value={ Position } onChange={e => setPosition(e.target.value)} required/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Telephone" sm={2}>Telephone</Label>
                    <Col sm={10}>
                        <Input type="text" name="Telephone" id="Telephone" placeholder="Telephone Number" value={ Telephone } onChange={e => setTelephone(e.target.value)} required/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Mobile" sm={2}>Mobile</Label>
                    <Col sm={10}>
                    <Input type="text" name="Mobile" id="Mobile" placeholder="Mobile Number" value={ Mobile } onChange={e => setMobile(e.target.value)} required/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2">
                    <Label for="Email" sm={2}>Email</Label>
                    <Col sm={10}>
                    <Input type="email" name="Email" id="Email" placeholder="Email" value={ Email } onChange={e => setEmail(e.target.value)} required/>
                    </Col>
                </FormGroup>
                <Button type="submit">Submit</Button>
                &nbsp;&nbsp;&nbsp;
                <Button type="reset" onClick = {handleEdit}>Reset</Button>
                {errorMessage && (
                <p className="error" className="text-danger"> {errorMessage} </p>
                )}
            </Form>
        </Container>
    );
}

export default CopyUser;