import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SubCourse from './SubCourse';

export default function Course() {

    let [courseName , setCourse] = useState("");

    let changeSubCourse=(value)=>{
        setCourse(value);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.crs}> Course : {courseName}</Text>
      <SubCourse sCourse={courseName} />
      <TouchableOpacity onPress={() => (changeSubCourse("Programming"))} style={styles.info}>
        <Text style={styles.slct}>Progamming</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => (changeSubCourse("Designing"))} style={styles.info}>
        <Text style={styles.slct}>Designing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => (changeSubCourse("Animation"))} style={styles.info}>
        <Text style={styles.slct}>Animation</Text>
      </TouchableOpacity>
    </View>
  )
}

let styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#814141",
    paddingTop:100
  },
  crs:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"600"
  },
  info:{
    borderColor:"white",
    borderBottomWidth:1

  },
  slct:{
    fontSize:20,
    textAlign:"center",
    lineHeight:50
  }


})