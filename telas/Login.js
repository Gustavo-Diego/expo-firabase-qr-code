import React from 'react';
import { StyleSheet, Text, SafeAreaView, /*ActivityIndicator*/ } from 'react-native';

import firebase from 'firebase'

checaLogin = () =>{
        firebase.auth().onAuthStateChanged(function(usuario){

                if(usuario){
                        this.props.navigation.navigate('TelaInicial')
                }else{
                        this.props.navigation.navigate('Login')
                }

        })
}
/* <ActivityIndicator size="large" />*/

export default function Login() {
        
  return (
          <SafeAreaView style={styles.container}>
                  <Text>certo</Text>
          </SafeAreaView>
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
