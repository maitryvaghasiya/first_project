import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Salary from './Salary';

export default function Employee() {

  let [employeeDsdn, setEmployee] = useState("");

  let changeEmployee = (value) => {
    setEmployee(value);
  }

  // console.log(employeeDsdn);
  return (
    <View style = {styles.container}>

      <Text style = {styles.head}>Type Of Employee</Text>

      <View style = {styles.pos}>    
      <TouchableOpacity onPress={() => changeEmployee("Manager")} style ={styles.button}>
        <Text style = {styles.name}>Manager</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeEmployee("TeamLeader")} style ={styles.button}>
        <Text style = {styles.name}>Team Leader</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeEmployee("Developer")} style ={styles.button}>
        <Text style = {styles.name}>Developer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeEmployee("Tester")} style ={styles.button}>
        <Text style = {styles.name}>Tester</Text>
      </TouchableOpacity>
      </View>

      <View style = {styles.res}>
      <Text style={styles.emp}>Employee : {employeeDsdn}</Text>
      
      <Salary e_salary={employeeDsdn}/>
      </View>

    </View>
  )
}


let styles = StyleSheet.create({
  container : {
    flex : 1,
    // backgroundColor: "black"
  },
  pos : {
    flex:2,
    backgroundColor:"black",
    flexDirection:"row",
    flexWrap: "wrap",
    alignContent:"space-around"

  },
  head : {
    fontSize: 25,
    lineHeight:40,
    textAlign: "center",
    textDecorationLine: "underline",
    fontWeight:"bold",
    backgroundColor:"black",
    paddingBottom: 50,
    color: "white",
    paddingTop:10
  },
  button: {
    borderColor: "black",
    backgroundColor:"white",
    borderRadius:50,
    width:200,
    color:"black",
    marginBottom:80,
    marginLeft:10,
    alignItems:"center"

  },
  name : {
    color:"black",
    textAlign:"center",
    padding:10,
    fontSize:20,
    fontWeight: "600"
  },
  res : {
    flex : 4,
    backgroundColor:"white",
    // justifyContent:"space-around",
    alignItems:"center"
  },
  emp: {
    borderWidth:1,
    width:280,
    padding:20,
    fontSize:20,
    fontWeight:"600",
    borderRadius:20,
    backgroundColor:"black",
    color:"white",
    marginTop:30
    
  }

})