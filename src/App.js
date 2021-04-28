import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Landing from './Components/home/Landing';
import Movie from './Components/home/Movie';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import store from './store';
import React , {Component} from 'react';

import './App.css';

export default class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <Router>
      <div>
     <Navbar/>
     <Route exact path='/' component={Landing} />
     <Route exact path='/movie/:id' component={Movie} />
     <Footer/>
     </div>
    </Router>
    </Provider>
  );
}
}


