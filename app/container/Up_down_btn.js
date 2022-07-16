// import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
// import React, { useState } from 'react'

// export default function Up_down_btn() {
//     let [number, setNumber] = useState(0);

//     let increment = () => {
//         setNumber(preNumber => preNumber + 1);
//     }
//     let decrement = () => {
//         setNumber(preNumber => preNumber - 1);
//     }
//   return (
//     <View style={styles.container}>
//       <View>
//       <TouchableOpacity onPress={increment} style={styles.pbtn}>
//         <Text style={styles.txt}>+</Text>
//       </TouchableOpacity>
//       <Text style={styles.num}>Number : {number}</Text>
//       <TouchableOpacity onPress={decrement} style={styles.nbtn}>
//         <Text style={styles.txt}>-</Text>

//       </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// let styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         justifyContent: "center",
//         paddingHorizontal: 10,
//       },
//       num: {
//         fontSize: 20,
//         textAlign: "center",
//         marginBottom:50,
//         marginTop:50,
//         borderColor : "#954535",
//         borderWidth: 1,
//         borderRadius: 50,
//         marginLeft: 120,
//         marginRight:120,
//         backgroundColor: "#CD7F32",
//         padding: 15,
//         fontWeight: "900"

//       },
//       pbtn: {
//         backgroundColor: "#008080",
//         alignItems: "center",
//         padding:15,
//         borderColor : "white",
//         borderWidth: 2,
//         borderRadius: 50,
//         marginLeft: 120,
//         marginRight:120,
//         marginTop: 50,     
//     },
//       nbtn: {
//         backgroundColor: "#008080",
//         alignItems: "center",
//         padding:15,
//         borderColor : "white",
//         borderWidth: 2,
//         borderRadius: 50,
//         marginLeft: 120,
//         marginRight:120     
//     },
//     txt : {
//         fontSize:30
//     }
// })

import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function Up_down_btn() {
    let [number, setNumber] = useState(0);

    let increment = () => {
        setNumber(preNumber => preNumber + 1);
    }
    let decrement = () => {
        setNumber(preNumber => preNumber - 1);
    }
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
      <TouchableOpacity onPress={decrement} style={styles.nbtn}>
        <Text style={styles.txt}>-</Text>

      </TouchableOpacity>
      <Text style={styles.num}>Number : {number}</Text>
      <TouchableOpacity onPress={increment} style={styles.pbtn}>
        <Text style={styles.txt}>+</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  )
}

let styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        paddingHorizontal: 50,
        // backgroundColor:"black"
        
      },
      num: {
        fontSize: 20,
        // textAlign: "center",
        // marginBottom:50,
        // marginTop:50,
        borderColor : "white",
        borderWidth: 1,
        // borderRadius: 5,
        // marginLeft: 120,
        // marginRight:120,
        backgroundColor: "#CD7F32",
        padding: 22,
        fontWeight: "900",
        alignItems:"center"

      },
      btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:50
      },
      pbtn: {
        backgroundColor: "#008080",
        alignItems: "center",
        padding:12,
        borderColor : "white",
        borderWidth: 2,
        // borderRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50
        // marginLeft: 120,
        // marginRight:120,
        // marginTop: 50,     
    },
      nbtn: {
        backgroundColor: "#008080",
        alignItems: "center",
        padding:13,
        borderColor : "white",
        borderWidth: 2,
        // borderRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50
        // marginLeft: 120,
        // marginRight:120  ,
        // marginTop: 50,     
   
    },
    txt : {
        fontSize:30
    }
})