import React, { Component } from 'react'
import { Text,View,TextInput, Button } from 'react-native'
import { auth } from '../../App';

export class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            emial:' ',
            password: ' ',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp(){
        const { email, password} = this.state;
         auth.createUserWithEmailAndPassword(email, password).then((result) => { 
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
                onPress={()=> this.onSignUp()}
                title="Sign Up"
                />
            </View>
            
        )
    }
}

export default Register
