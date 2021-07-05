import React, { useEffect, useState } from 'react';
import { 
    Container,
    Table
} from 'reactstrap';
import { getUsers } from '../../services/users';

const Users = () =>
{

    const [Users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
        .then(data => {
            setUsers(data);
        });

    }, []);

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Channel</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.map(e => {
                            return  <tr>
                                        <td scope="row">{e.FirstName}</td>
                                        <td>{e.LastName}</td>
                                        <td>{e.ChannelID}</td>
                                        <td>{e.Email}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default Users;