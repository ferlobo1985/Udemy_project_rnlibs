import React, { useState } from 'react';
import {Text,View,Image,StyleSheet, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Picker = () => {
  const [avatar,setAvatar] = useState(null)

  const getAvatar = () => {
    ImagePicker.showImagePicker({
      title:'Select an awesome picture',
      takePhotoButtonTitle:'Take a super pretty one !!',
      chooseFromLibraryButtonTitle:'really? and oldie ?'
    },response => {
      if(response.didCancel){
        console.log('user canceled')
      } else if (response.error){
        console.log(response.error)
      } else {
        const source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log(source)
        setAvatar(response.uri);
      }
    })
  }

  return(
    <View>
      <Image
        source={{uri:avatar}}
        style={styles.avatar}
      />
      <Button
        title="Add your avatar"
        onPress={getAvatar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  avatar:{
    width:'100%',
    height:400
  }
})

export default Picker;