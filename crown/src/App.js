import { Route,Switch } from 'react-router-dom'
import './App.css';
import React from 'react'
import HomePage from './pages/homepage/hompagecomponent'
import ShopPage from "./pages/shop/shoppage";
import Header from './components/header/header';
import SignInOrUp from './pages/signinorup/signinoruppage'
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/users/users.actions'
import { connect } from 'react-redux'
class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {  
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const docRef = await createUserProfileDocument(userAuth);

      docRef.onSnapshot(snapShot=>{
        setCurrentUser({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })
      })
      }
      setCurrentUser(userAuth)
    });
  }
  componentWillUnmount () {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path='/signin' component={SignInOrUp}/>
        </Switch>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
