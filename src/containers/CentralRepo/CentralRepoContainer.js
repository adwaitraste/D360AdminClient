import React, { useEffect, useState } from 'react';
import { 
    Container,
} from 'reactstrap';
import CentralRepoNavbar from '../../components/CentralRepoNavbar';
import Backup from './Backup';
import Archive from './Archive';
import Move from './Move';
import Tidy from './Tidy';
import { Route, Switch } from 'react-router-dom';

const CentralRepoContainer = () =>
{
    return(
        <Container>
            <CentralRepoNavbar />
            <Switch>
                <Route exact path="/CentralRepo">
                    <Container>
                        <h1>Central Repository</h1>
                    </Container>
                </Route>
                <Route exact path="/CentralRepo/Backup" component={Backup} />
                <Route exact path="/CentralRepo/Archive" component={Archive} />
                <Route exact path="/CentralRepo/Move" component={Move} />
                <Route exact path="/CentralRepo/Tidy" component={Tidy} />
            </Switch>
        </Container>
    );
}

export default CentralRepoContainer;