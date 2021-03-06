import React, {useState} from 'react';
import { StyleSheet,Text } from 'react-native';

import {Container, Form, Input, Item, Button, Label} from 'native-base'

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

firebase.initializeApp(firebaseConfig)

export default function Login({navigation}) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function logar(){

    try {

      firebase.auth().signInWithEmailAndPassword(email, senha).then((usuario)=>{

        console.log(usuario)
        alert('Bem-vindo !') 

        setEmail('')
        setSenha('')

        navigation.navigate('TelaQR')

      }).catch((error)=>{
        alert('verifique senha e email '+ error)
        console.log(error)
        setSenha('')
      })
      
    } catch (error) {
      console.log(error)
    }

  }

  function cadastrar(){

    try {

      if(senha.length < 6){
        alert('Faça uma senha com mais de 6 caracteres')
        setSenha('')
      }else{
        firebase.auth().createUserWithEmailAndPassword(email, senha)

        alert('Cadastrado com sucesso')
        setEmail('')
        setSenha('')

      }
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <Container style={styles.container}>
      <Form>

        <Item floatingLabel>
          <Label>E-mail</Label>
          <Input 
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
          /> 
          
        </Item>

        <Item floatingLabel>
          <Label>Senha</Label>
          <Input 
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          /> 
        </Item>

        <Button style={{marginTop:10}}
          full
          rounded
          success
          onPress={logar}
        >
          <Text style={{color:'white'}} >Login</Text>
        </Button>

        <Button style={{marginTop:10}}
          full
          rounded
          primary
          onPress={cadastrar}
        >
          <Text style={{color:'white'}} >Cadastrar</Text>
        </Button>

      </Form>
    </Container>  
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
