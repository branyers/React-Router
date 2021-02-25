import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div className="container mt-5">

        <h1>Barra de Navegacion</h1>
        <NavBar/> 
      </div>

      <Switch>

        <Route path="/contacto">
          <Contact />

        </Route>


        <Route path="/about">
          <About />

        </Route>

        <Route path="/">
          <Home />

        </Route>

      </Switch>


    </Router>
  );
}

export default App;
