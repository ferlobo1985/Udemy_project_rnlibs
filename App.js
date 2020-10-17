import React, { useState } from 'react';
import {Text,View,Image,StyleSheet, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import Picker from './src/picker'

const App = () => {

  return(
    <View>
      <Picker/>
    </View>
  )
}

export default App;