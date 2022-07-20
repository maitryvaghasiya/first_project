import { View, Text } from 'react-native'
import React from 'react'

export default function SubCourse(props) {

    let sub= "";

    if(props.sCourse === "Programming"){
        sub = "C Programming"
    }else if(props.sCourse === "Designing"){
        sub = "PhotoShop"
    }else if(props.sCourse === "Animation"){
        sub = "VFX"
    }
  return (
    <View>
      {
        <Text>Sub Course : {sub}</Text>
      }
    </View>
  )
}