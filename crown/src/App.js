import { Route,Switch } from 'react-router-dom'
import './App.css';
import React from 'react'
import HomePage from './pages/homepage/hompagecomponent'
import ShopPage from "./pages/shop/shoppage";
import Header from './components/header/header';
import SignInOrUp from './pages/signinorup/signinoruppage'
import { auth } from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user.displayName)
    })
  }
  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path='/signin' component={SignInOrUp}/>
        </Switch>
      </div>
    )
  }
}

export default App;
