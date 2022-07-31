import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from './app/container/Home'
import Country from './app/container/Country'
import City from './app/container/City'
import Up_down_btn from './app/container/Up_down_btn'
import Course from './app/container/Course'
import SubCourse from './app/container/SubCourse'
import Employee from './app/container/Employee'
import Salary from './app/container/Salary'
import Time from './app/container/Time'
import Calc from './app/container/Calc '

export default class App extends Component {
  render() {
    return (
      <>
       {/* <Home /> */}
       {/* <Country /> */}
       {/* <City /> */}
       {/* <Up_down_btn /> */}
       {/* <Course /> */}
       {/* <SubCourse /> */}
       {/* <Employee /> */}
       {/* <Salary /> */}
       <Time />
       {/* <Calc /> */}
      </>
    )
  }
}