import { Button, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state ={
      name : "Maitry"
    }
  }
 
  changeName =() =>{
    this.setState({
      name: "Vaghasiya"
    })
  }
  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <TouchableOpacity onPress={this.changeName}>
          <Text>Change Name</Text>
        </TouchableOpacity>
      </View>
    )
  }
}