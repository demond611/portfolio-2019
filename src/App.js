import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from                  'react-router-dom';
import Nav from         './Components/NavComponent/Nav';
import HomePage from    './Components/HomeComponent/HomePage';
import About from       './Components/AboutComponent/About';
import Contact from     './Components/ContactComponent/Contact';
import Sites from       './Components/SiteComponent/Sites';
import Footer from      './Components/FooterComponent/Footer';
import ScrollToTop from './Components/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="ui fluid container">
            <Nav />
            <Switch>
              <Route exact path="/"   component={HomePage} />
              <Route path="/about"    component={About} />
              <Route path="/contact"  component={Contact} />
              <Route path="/sites"    component={Sites} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;