import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from './app/container/Home'
import Country from './app/container/Country'
import City from './app/container/City'
import Up_down_btn from './app/container/Up_down_btn'

export default class App extends Component {
  render() {
    return (
      <View>
       <Home />
       <Country />
       <City />
       <Up_down_btn />
      </View>
    )
  }
}