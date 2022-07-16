// import { Text, TouchableOpacity, View } from 'react-native'
// import React, { Component } from 'react'

// export default class City extends Component {
//   constructor(props){
//     super(props);

//     this.state ={
//       city_name : "Mumbai",
//       famous_place : "Taj Hotel"
//     }
//   }


//   changeCity =() =>{
//     this.setState({
//       city_name: "Surat",
//       famous_place: "Dumas"
//     })
//   }
//   render() {
//     return (
//       <View>
//         <Text>{this.state.city_name}</Text>
//         <Text>{this.state.famous_place}</Text>
//         <TouchableOpacity onPress={this.changeCity}>
//           <Text>Change City</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }


import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function City() {

  let [cityName, setCityName] = useState("Prayagraj");
  let [famousPlace, setFamousPlace] = useState("Akabar Fort");

  let changeCity = () => {
    setCityName("Agra")
    setFamousPlace("Tajmahal")
  }
  return (
    <View style={styles.container}>
      {/* <Image source={require("../")}/> */}
      <Text style={styles.city}>{cityName}</Text>
      <Text style={styles.place}>{famousPlace}</Text>
      <TouchableOpacity style={styles.button} onPress={changeCity}>
        <Text>Change City</Text>
      </TouchableOpacity>
    </View>
  )
}

let styles = StyleSheet.create({
  container :{
    backgroundColor:"black",
    // flex:1,
    // textAlign: "center"
  },
  city:{
    fontSize:50,
    lineHeight: 100,
    textAlign:"center"
  },
  place:{
    fontSize:30,
    lineHeight: 70,
    textAlign:"center"
  },
  button:{
    borderColor: "white",
    borderRadius: 50,
    backgroundColor: "grey",
    alignItems: "center",
    padding: 30,
    // fontSize: 50,

    
  }
})