import './App.css';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
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
              <AboutPage></AboutPage>
            </Route>
            <Route path="/calculator">
              <CalculatorPage></CalculatorPage>
            </Route>
            <Route path="/contact-us">
              <ContactUsPage></ContactUsPage>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
