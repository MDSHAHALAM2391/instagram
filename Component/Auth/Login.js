import React, { Component } from 'react'
import { Text,View,TextInput, Button } from 'react-native'
import { auth } from '../../App';

export class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            emial:' ',
            password: ' ',
        }

        this.onSignIn = this.onSignIn.bind(this)
    }
    onSignIn(){
        const { email, password} = this.state;
         auth.signInWithEmailAndPassword(email, password).then((result) => { 
            console.log(result)
        })
        .catch((error) =>{
            console.log(result)
        })
    }
    render() {
        return (
            <View>
                <TextInput 
                placeholder="email"
                onChangeText={(emial) => this.setState({ emial })}
                />

                <TextInput 
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                />

                <Button
                onPress={()=> this.onSignIn()}
                title="Sign In"
                />
            </View>
            
        )
    }
}

export default Login
