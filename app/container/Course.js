import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SubCourse from './SubCourse';

export default function Course() {

    let [courseName , setCourse] = useState("");

    let changeSubCourse=(value)=>{
        setCourse(value);
    }

  return (
    <View>
      <Text> Course : {courseName}</Text>
      <SubCourse sCourse={courseName} />
      <TouchableOpacity onPress={() => (changeSubCourse("Programming"))}>
        <Text>Progamming</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => (changeSubCourse("Designing"))}>
        <Text>Designing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => (changeSubCourse("Animation"))}>
        <Text>Animation</Text>
      </TouchableOpacity>
    </View>
  )
}