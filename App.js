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

  let ans = a1.some((b) => b>50)
  console.log(ans);
  


  return (
    <View>
      {
        
        // ans.map((a) => {
        //   return (
        //     <Text>{a}</Text>
            
            

        //   )

        // })
      }

    </View>
  )
}
