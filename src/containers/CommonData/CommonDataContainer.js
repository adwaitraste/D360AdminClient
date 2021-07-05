import React, { useEffect, useState } from 'react';
import { 
    Container,
} from 'reactstrap';
import CommonDataNavbar from '../../components/CommonDataNavbar';
import { Route, Switch } from 'react-router-dom';
import Prices from './Prices';
import Parts from './Parts';
import Documents from './Documents';
import Products from './Products';

const CommonDataContainer = () =>
{
    return(
        <Container>
            <CommonDataNavbar />
            <Switch>
                <Route exact path="/CommonData">
                    <Container>
                        <h1>Common Data</h1>
                    </Container>
                </Route>
                <Route exact path="/CommonData/Prices" component={Prices} />
                <Route exact path="/CommonData/Parts" component={Parts} />
                <Route exact path="/CommonData/Customers">
                    <Container>
                        <h1>SAP Customers</h1>
                    </Container>
                </Route>
                <Route exact path="/CommonData/Products" component={Products} />
                <Route exact path="/CommonData/Documents" component={Documents} />
            </Switch>
        </Container>
    );
}

export default CommonDataContainer;