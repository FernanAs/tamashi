import React from 'react';
import './App.css';
import { Navbar, Footer} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Food from './pages/Food/Food';
import Ourpolicy from './pages/Our Policy/OurPolicy';
import Signup from './pages/Signup/Signup';
import GlobalStyle from './globalStyles';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Food" exact component={Food} />
        <Route path="/our-policy" exact component={Ourpolicy} />
        <Route path="/sign-up" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
