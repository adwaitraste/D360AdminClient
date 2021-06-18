import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from "./components/AppNavbar";
import Users from "./containers/Users";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Users/>
    </div>
  );
}

export default App;
