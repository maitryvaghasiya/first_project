// import { Text, TouchableOpacity, View } from 'react-native'
// import React, { Component } from 'react'

// export default class Country extends Component {
//     constructor(props){
//         super(props);

//         this.state ={
//             name: "America"
//         }
//     }

//     changeCountry =() => {
//         this.setState({
//             name : "India"
//         })       
//     }

//   render() {
//     return (
//       <View>
//         <Text>{this.state.name}</Text>
//         <TouchableOpacity onPress={this.changeCountry}>
//             <Text>Change Country</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }



import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Country() {

  let [countryName, setCountryname] = useState("USA");

  let changeCountry = ()=>{
    setCountryname("India")
  }
  return (
    <View>
      <Text>{countryName}</Text>

      <TouchableOpacity onPress={changeCountry}>
        <Text>Change Country</Text>
      </TouchableOpacity>
    </View>
  )
}