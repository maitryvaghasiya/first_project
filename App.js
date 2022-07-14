import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {

  let data_m = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ]

  let total = data_m.filter((m,i) => m.expiry >=2022 && m.status === true)
                .reduce((acc,m,i) => acc + m.price ,0)
  
  let a = data_m.filter((m,i) => m.expiry >=2022 && m.status === true)
  return (
    <View style={styles.container}>
      {
        a.map((m,i)=>{
          let{id,name,quantity,price,expiry,status} = m;

          return(
            <View key={i} style={styles.table}>
              <Text style={styles.list}>id = {id}</Text>
              <Text style={styles.list}>name = {name}</Text>
              <Text style={styles.list}>quantity = {quantity}</Text>
              <Text style={styles.list}>price = {price}</Text>
              <Text style={styles.list}>expiry = {expiry}</Text>
              <Text style={styles.list}>status = {status.toString()}</Text>
            </View>
          )
        })
      }
      <Text style={styles.total}>TotalPrice = {total}</Text>
    </View>
  )
}

let styles = StyleSheet.create({
  container :{
    backgroundColor:"black",
    flex:1,
  },
  table: {
    borderBottomWidth: 2,
    borderBottomColor: "#E5E8E8",
    backgroundColor: "#808080"
    
  },
  list:{
    fontSize: 18,
    fontFamily: "georgia",
    fontStyle: "italic",
    lineHeight:30,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E8E8",
    textTransform: "capitalize",
    lineHeight:50,
    marginLeft: 15
  },
  total:{
    fontFamily: "georgia",
    fontSize: 22,
    color: "#EBDEF0",
    backgroundColor: "#78281F",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E8E8",
    // margin: 15
    marginTop:20,
    lineHeight: 100,
    paddingLeft: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E8E8",
    fontWeight: "bold"

  }
})





// ----------------EMPLOYEE DATA---------------------------
// import {StyleSheet,View, Text,ScrollView } from 'react-native'
// import React from 'react'

// export default function App() {

//   let data_e = [
//     {
//       name: "amit",
//       age: 35,
//       salary: 40000,
//       bonus: 1000,
//       status: true
//     },
//     {
//       name: "ajay",
//       age: 25,
//       salary: 38000,
//       bonus: 2000,
//       status: false
//     },
//     {
//       name: "mayur",
//       age: 23,
//       salary: 50000,
//       bonus: 500,
//       status: true
//     },
//     {
//       name: "jay",
//       age: 29,
//       salary: 35000,
//       bonus: 600,
//       status: true
//     },
//     {
//       name: "raj",
//       age: 33,
//       salary: 22000,
//       bonus: 2000,
//       status: true
//     },
//   ]
//   let y = data_e.filter((e,i) => e.status === true)
//                 .reduce((acc,e,i)=>acc + e.salary + e.bonus , 0)

//   let z = data_e.filter((e, i)=> e.status === true)  
//                 .reduce((acc,e,i)=>acc + e.salary,0)  
              
//   let v = data_e.filter((e, i)=> e.status === true)  
//                 .reduce((acc,e,i)=>acc + e.bonus,0)

//   let x = data_e.filter((e, i)=> e.status === true)
//   return (
//     <ScrollView style={styles.scrollView}>
//     <View style={styles.container}>
//     <Text style={styles.heading}>EMPLOYEE DATA</Text>
//     <View style={styles.table}>
//     <Text style={styles.hlist}>Name</Text>
//     <Text style={styles.hlist}>Age</Text>
//     <Text style={styles.hlist}>Salary</Text>
//     <Text style={styles.hlist}>Bonus</Text>
//     <Text style={styles.hlist}>Status</Text>
//     <Text style={styles.hlist}>TSalary</Text>
//     </View>
//     {
//     x.map((e,i)=>{
//       let{name,age,salary,bonus,status} = e;
//       return(
//         <View key={i} style={styles.table}>
//           <Text style={styles.list}>{name}</Text>
//           <Text style={styles.list}>{age}</Text>
//           <Text style={styles.list}>{salary}</Text>
//           <Text style={styles.list}>{bonus}</Text>
//           <Text style={styles.list}>{status.toString()}</Text>
//           <Text style={styles.list}>{bonus + salary}</Text>
//         </View>
//       )
//     })
//     }
//       <Text style={styles.total}>Total_Cost = {y}</Text>
//     </View>
  
//   </ScrollView>
//   )
// }


// let styles = StyleSheet.create({
//   container :{
//     backgroundColor:"black",
//     flex:1,
//     // margin:15
//   },
//   table: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E8E8",
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E8E8",
//     borderTopWidth: 1,
//     borderTopColor: "#E5E8E8",
//     borderRightWidth: 1,
//     borderRightColor: "#E5E8E8",
//     borderLeftWidth: 1,
//     borderLeftColor: "#E5E8E8",
//   },
//   list:{
//     flex: 1,
//     fontSize: 18,
//     fontFamily: "georgia",
//     fontStyle: "italic",
//     lineHeight:25,
//     textTransform: "capitalize",
//     paddingHorizontal:1,
//     paddingVertical:20,
//     backgroundColor:"#717D7E",
//     },
//   hlist:{
//     flex: 1,
//     fontSize: 18,
//     fontFamily: "georgia",
//     fontStyle: "italic",
//     lineHeight:25,
//     textTransform: "capitalize",
//     paddingHorizontal:1,
//     paddingVertical:20,
//     backgroundColor:"#515A5A",
//     textDecorationLine: "underline"
//   },
//   heading:{
//     fontSize:25,
//     fontFamily: "georgia",
//     fontWeight: "bold",
//     textAlign:"center",
//     backgroundColor: "#273746",
//     lineHeight: 50,
//     color: "white",
//     borderBottomWidth: 2,
//     borderBottomColor: "#E5E8E8",
//     borderTopWidth: 2,
//     borderTopColor: "#E5E8E8",
//     borderRightWidth: 2,
//     borderRightColor: "#E5E8E8",
//     borderLeftWidth: 2,
//     borderLeftColor: "#E5E8E8",
//     marginTop: 10,
//     marginBottom:20
//   },
//   total:{
//     fontSize: 22,
//     color: "#EBDEF0",
//     backgroundColor: "#2C3E50",
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E8E8",
//     borderTopWidth: 1,
//     borderTopColor: "#E5E8E8",
//     borderRightWidth: 1,
//     borderRightColor: "#E5E8E8",
//     borderLeftWidth: 1,
//     borderLeftColor: "#E5E8E8",
//     lineHeight: 50,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginTop: 20
//   }
// })



