import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from "./components/AppNavbar";
import UsersContainer from "./containers/Users/UsersContainer";
import CommonDataContainer from './containers/CommonData/CommonDataContainer';
import CentralRepoContainer from './containers/CentralRepo/CentralRepoContainer';
import ProductAttributesContainer from './containers/ProductAttributes/ProductAttributesContainer';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Switch>
          <Route exact path="/">
            <Container>
              <h1 className={'text-center mt-5 pt-5'}>
                Welcome to D360 Admin
              </h1>
              <h3 className={'text-center mt-4'}>
                Navigate using the Navbar above
              </h3>
            </Container>
          </Route>
          <Route path="/Users" component={UsersContainer} />
          <Route path="/CommonData" component={CommonDataContainer} />
          <Route path="/CentralRepo" component={CentralRepoContainer} />
          <Route path="/ProductAttributes" component={ProductAttributesContainer} />
      </Switch>
    </div>
  );
}

export default App;
