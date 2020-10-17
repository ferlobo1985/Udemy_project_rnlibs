import React, { useState, useEffect  } from 'react';
import {
  Text,View,
  Image,StyleSheet, 
  Button, PermissionsAndroid
} from 'react-native';
import Contacts from 'react-native-contacts'

import Picker from './src/picker'

const App = () => {

  useEffect(()=>{
   PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    )
    .then(()=>{

      Contacts.getAll().then( contacts =>{
        console.log(contacts)
      }).catch(err=> console.log(err))
      
    })
  },[])

  return(
    <View>
      <Picker/>
    </View>
  )
}

export default App;