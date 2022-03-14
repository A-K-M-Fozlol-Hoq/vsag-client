import './App.css';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Helmet from 'react-helmet';
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>therestaurantpatio</title>
        <meta
          name="description"
          content="We make the property rental journey simple for Landlords, Tenants and Vendors, by providing the
necessary tools and knowledge for them to complete the rental cycle seamlessly and efficiently."
        />
        <meta
          name="keywords"
          content="therestaurantpatio, restaurantpatio, restaurant patio, the restaurant patio"
        />
      </Helmet>
      <>
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
              <Route path="/admin-page">
                <AdminPage></AdminPage>
              </Route>
              <Route path="/pages/page1">
                <PageOne />
              </Route>
              <Route path="/pages/page2">
                <PageTwo />
              </Route>
              <Route path="/pages/page3">
                <PageThree />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
      <MessengerCustomerChat
        pageId="110615818236372"
        appId="331840458888863
    "
      />
      ,
    </div>
  );
}

export default App;
