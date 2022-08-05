import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Icon() {
  return (
    <View >
        <MaterialIcons name={'house'} size={100} color={"pink"}/>
        <EvilIcons name={'eye'} size={100} color={"#C2B280"}/>
        <Entypo name={'camera'} size={100} color={"#D3D3D3"}/>
        <Feather name={'twitter'} size={100} color={"#40B5AD"}/>
        <FontAwesome name={'lock'} size={100} color={"#C3B1E1"}/>
      <Text style={styles.font}>Icon</Text>
    </View>
  )
}

styles = StyleSheet.create({
  font :{
    fontSize:40,
    fontFamily: "Saira-BoldItalic"
  }
})