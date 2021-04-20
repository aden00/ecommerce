import { Route,Switch } from 'react-router-dom'
import './App.css';
import React from 'react'
import HomePage from './pages/homepage/hompagecomponent'

const HatPage = () => {
  return(
    <div>
      <h1>Hats</h1>
    </div>
  )
}
function App() {
  return (
    <div >
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/shop/hats' component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
