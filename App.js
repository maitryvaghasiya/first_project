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

  // let m = arr.map((x) => {
  //   let n = arr.splice(2,1,30)
  //   console.log(n);
  // })

  // let y = a1.filter((c) => c>60)
  // // return c>60;
  // console.log(y);

  let xy = {"a","c",67,78}

  for(a in xy){
    console.log(xy[a]);

  }

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
