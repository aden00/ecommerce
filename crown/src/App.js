import { Route,Switch } from 'react-router-dom'
import './App.css';
import React from 'react'
import HomePage from './pages/homepage/hompagecomponent'
import ShopPage from "./pages/shop/shoppage";
import Header from './components/header/header'
function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
