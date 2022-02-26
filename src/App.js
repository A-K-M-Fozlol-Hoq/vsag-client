import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Calculator from './pages/Calculator/Calculator';
import ContactUs from './pages/ContactUs/ContactUs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/calculator">
              <Calculator></Calculator>
            </Route>
            <Route path="/contact-us">
              <ContactUs></ContactUs>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
