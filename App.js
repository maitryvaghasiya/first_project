import { View, Text } from 'react-native'
import React from 'react'

export default function App() {

  let arr = [1, 2, 3, 4, 5]
  let a1 =[55,66,77,88]
  // arr.push(99)
  // arr.unshift(5)
  // arr.shift()
  // arr.pop()
  // arr.splice(2,0,88)
  // arr.splice(1,2,33)
  // arr.splice(1,1)
  // a2 = arr.concat(a1)
  // console.log(a2);

  

  // let aa = arr.find((c) => c>3)
  // console.log(aa)

  // let x = arr.map((a,i) => {
  //     return a
  //   }
  // );
  // console.log(x);

  let a = arr.map((d,i)=>{
    if(i===2){                                  // replace element
      return 90
    }else{
      return d
    }
  })
  console.log(a);

  // let y = a1.filter((c) => c>60)
  // // return c>60;
  // console.log(y);


  // let x = arr.filter((b) => b>3);
  // console.log(x);
  


  return (
    <View>
       {/* {
        
        ans.map((a) => {
          return (
            <Text>{a}</Text>
            
            

          )

        })
      }  */}

    </View>
  )
}


// import { View, Text } from 'react-native'
// import React from 'react'

// export default function App() {

//   let data = [
//     {
//       id: 101,
//       name: 'Abacavir',
//       quantity: 25,
//       price: 150,
//       expiry: 2022,
//       status: true
//     },
//     {
//       id: 102,
//       name: 'Eltrombopag',
//       quantity: 90,
//       price: 550,
//       expiry: 2021,
//       status: true
//     },
//     {
//       id: 103,
//       name: 'Meloxicam',
//       quantity: 85,
//       price: 450,
//       expiry: 2025,
//       status: false
//     },
//     {
//       id: 104,
//       name: 'Allopurinol',
//       quantity: 50,
//       price: 600,
//       expiry: 2023,
//       status: true
//     },
//     {
//       id: 105,
//       name: 'Phenytoin',
//       quantity: 63,
//       price: 250,
//       expiry: 2021,
//       status: false
//     }
//   ];


//   // let x = data.filter((d,i) => (d.expiry>=2022));
//   // // console.log(x);
  
//   // return (
//   //   <View>
//   //     {
//   //      data.filter((d,i)=>{
//   //       return (
//   //         <View key ={i}>
//   //         <Text>{d.name}</Text>
//   //         <Text>{d.expiry}</Text>
//   //         </View>
//   //       )
//   //       })
//   //     }
        
          
        
      
//   //   </View>
//   // )
//   //   }


// let data1 =[
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

//   let z = data1.filter((m,i) => (m.status===true));
//   console.log(z);
// }


import { View, Text } from 'react-native'
import React from 'react'

export default function App() {

  
  let d1 = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

//   let a = d1.filter((y,i) => y.status === true)                  // npx react-native run-android
//             .reduce((acc,y,i)=> acc+ y.salary+y.bonus,0)

// //  let c= d1.reduce((acc,b,i)=>(acc + b.salary + b.bonus,0))
            
// d1.map((a,i) => {
//   let {name,age,salary,bonus,status} = d1;
//   console.log(age);
// })


let b = d1.filter((c,i) => (c.salary >= 35000))
          .reduce((acc ,c , i )=>(acc+c.salary,0))


let x = d1.filter((c,i) => (c.salary >= 35000))
          .reduce((acc ,c, i )=>(acc + c.bonus ,0))


  return (
    <View>
      <Text>Total salary = {b}</Text>
      <Text>Total bonus = {x}</Text>
    </View>
  )
}
