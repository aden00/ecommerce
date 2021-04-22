import { Route,Switch } from 'react-router-dom'
import './App.css';
import React from 'react'
import HomePage from './pages/homepage/hompagecomponent'
import ShopPage from "./pages/shop/shoppage";
import Header from './components/header/header';
import SignInOrUp from './pages/signinorup/signinoruppage'
function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path='/signin' component={SignInOrUp}/>
      </Switch>
    </div>
  );
}

export default App;
