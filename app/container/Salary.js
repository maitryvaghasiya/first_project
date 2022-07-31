
import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Salary(props) {
    // console.log(props.e_salary);
    let b_salary = 0;
    let bonus = 0;
 
    if(props.e_salary === "Manager"){
        b_salary = 100000;
    }else if(props.e_salary === "TeamLeader"){
        b_salary = 80000;
    }else if(props.e_salary === "Developer"){
        b_salary = 50000;
    }else if(props.e_salary === "Tester"){
        b_salary = 30000;
    }

    if(b_salary < 50000){
        bonus = b_salary*0.1
    }

  return (
    <View style ={styles.btn}>
        <Text style ={styles.salary}>Basic Salary : {b_salary}</Text>
        
        <Text style ={styles.salary}>Bonus : {bonus}</Text>
        <Text style ={styles.salary}>Total Salary : {b_salary + bonus}</Text>
    </View>
  )
}

let styles = StyleSheet.create({
    // btn:{
    //     flex:1,
    //     justifyContent:"space-around"
    // },
    salary: {
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