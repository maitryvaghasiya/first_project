import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Salary from './Salary';

export default function Employee() {

  let [employeeDsdn, setEmployee] = useState("");

  let changeEmployee = (value) => {
    setEmployee(value);
  }

  // console.log(employeeDsdn);
  return (
    <View>
      
      <TouchableOpacity onPress={() => changeEmployee("Manager")}>
        <Text>Manager</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeEmployee("TeamLeader")}>
        <Text>Team Leader</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeEmployee("Developer")}>
        <Text>Developer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeEmployee("Tester")}>
        <Text>Tester</Text>
      </TouchableOpacity>
      <Text>Employee : {employeeDsdn}</Text>
      
      <Salary e_salary={employeeDsdn} />

    </View>
  )
}