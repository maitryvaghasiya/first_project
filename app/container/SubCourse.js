import { View, Text ,StyleSheet} from 'react-native'
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
        <Text style={styles.sb}>Sub Course : {sub}</Text>
      }
    </View>
  )
}

let styles = StyleSheet.create({
  sb: {
    fontSize:20,
    textAlign:"center",
    lineHeight:50,
    borderColor:"white",
    borderBottomWidth:8,
    fontWeight:"600"
  }
})