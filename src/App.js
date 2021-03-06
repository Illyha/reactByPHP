import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import AnimalWidget from './components/animal';

function App() {
  return (
    
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/animal' component={AnimalWidget} />
        </Switch>
      </Layout>

  );
}

export default App;
