// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export default class Time extends Component {

//     constructor(props){         //1.intialize state value
//         super(props);

//         this.state = {
//             time: new Date()
//         }
//     }

//     tick = () => {
//         this.setState({
//             time: new Date()
//         })
//     }

//     //3. When component was mount.Use for requesting some data from server
//     componentDidMount = () => {
//         this.time = setInterval(() => {
//             this.tick()
//         },1000);
//     }

//     //4. Whenever previuos props or state changed to current state or props then componentDidUpdate is called
//     componentDidUpdate = (prevProps, prevState) => {
//         if(prevState.time !== this.state.time){
//             console.log("111");
//         }

//     }

//     //5. Whenever we leave component then componentWillUnmount is called. Use for relaese resources.
//     componentWillUnmount = () => {
//         clearInterval(this.time)
//     }

//     //2.Display (Whenever state value changed)
//   render() {
//     return (
//       <View>
//         <Text>{this.state.time.toLocaleTimeString()}</Text>
//       </View>
//     )
//   }
// }




import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Time() {
    let [time, setTime] = useState(new Date())

    let tick = () => {
        setTime(new Date())
    }

    //Component lifecycle method implement in function based component
    useEffect(() => {
        //3,4
        let t = setInterval(() => {
            tick();
        }, 1000);

        //5
        return () => {
            clearInterval(t)
        }
    },[])

    //2
    return (
        <View style ={styles.watch}>
            <Text style={styles.tm}>{time.toLocaleTimeString()}</Text>
        </View>
    )
}


let styles=StyleSheet.create({
    watch:{
        // flex:1,
        borderWidth:4,
        borderColor:"white",
        borderRadius:200,
        width:200,
        height:200,
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"white",
        marginTop:100,
        marginLeft:110
    },
    tm:{
        fontSize:40,
        color:"black"
         
    }
})