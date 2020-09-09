import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style.scss'
import './assets/fonts/fonts.scss'
import Navbar from './components/Navbar/Navbar'
import About from './components/pages/About/About'
import Items from './components/pages/Items/Items'
import Clubs from './components/pages/Clubs/Clubs'
import Services from './components/pages/Servises/Services'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/items' component={Items} />
        <Route path='/clubs' component={Clubs} />
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
