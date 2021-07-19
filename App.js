import React,{ Component} from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "firebase/app"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBeVuCuwM1EHe2OxIksMBcu_MtfLWk3gAo",
  authDomain: "instagram-project-e8287.firebaseapp.com",
  projectId: "instagram-project-e8287",
  storageBucket: "instagram-project-e8287.appspot.com",
  messagingSenderId: "415808736654",
  appId: "1:415808736654:web:64a5ba5c7f81c7b153a8df",
  measurementId: "G-XCEG7CR9T6"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

import Landing from './Component/Auth/Landing'
import Register from './Component/Auth/Register'
import Login from './Component/Auth/Login'



const Stack = createStackNavigator();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    }
  }

  componentDidUpdate(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn:false,
          loaded:true,
        })
      }else{
        this.setState({
          loggedIn:true,
          loaded:true,
        })
      }
    })
  }
  render(){
    const { loggedIn, loaded } = this.State;
    if(!loaded){
      return(
        <View style={{flex: 1,justifyContent:'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }
    if(!loggedIn){
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
return(
  <View style={{flex: 1,justifyContent:'center'}}>
    <Text>User is logged In</Text>
  </View>
)
}
}
export default App;
export const auth = firebase.auth() 