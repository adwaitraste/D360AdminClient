import React, { useEffect, useState } from 'react';
import { 
    Container,
} from 'reactstrap';
import UsersNavbar from '../../components/UsersNavbar';
import AddUser from './AddUser';
import EditUser from './EditUser';
import "./Users.css"
import { Route, Switch } from 'react-router-dom';
import Users from './Users';
import CopyUser from './CopyUser';
import DeleteUser from './DeleteUser';


const UsersContainer = () =>
{
    return(
        <Container>
            <UsersNavbar />
            <Switch>
                <Route exact path="/Users" component={Users} />
                <Route exact path="/Users/AddUser" component={AddUser} />
                <Route exact path="/Users/EditUser" component={EditUser} />
                <Route exact path="/Users/CopyUser" component={CopyUser} />
                <Route exact path="/Users/DeleteUser" component={DeleteUser} />
            </Switch>
        </Container>
    );
}

export default UsersContainer;