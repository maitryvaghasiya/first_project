import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Calc () {

    let [equation, setEquation] = useState('')

    let pressDigit = (value) => {
        setEquation(equation + value)
    }

    pressEqual = () => {
        setEquation(eval(equation).toString())
    }

    let clearInput = () => {
        setEquation("");
    }

    let deleteInput = () => {
        setEquation(equation.substring(0, (equation.length - 1)))
    }

    let b = ["AC", "DEL", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", " ", 0, ".", "=" ]

  return (
    <View style = {styles.container}>
      <View style = {styles.screen}>
        <Text style = {styles.text}>{equation}</Text>
      </View>
      <View style = {styles.button}>
        {
            b.map((b1) => {
                return(
                    b1 === "%" || b1 === "*" || b1 === "+" || b1 === "-" || b1 === "/" ?
                    <TouchableOpacity onPress={() => pressDigit(b1)} style={[styles.number,{backgroundColor:"#606060"}]}>
                        <Text style={styles.font}>{b1}</Text>
                    </TouchableOpacity>
                    :
                    b1 === "AC" ?
                    <TouchableOpacity onPress={() => clearInput(b1)} style={[styles.number,{backgroundColor:"#606060"}]}>
                        <Text style={styles.font}>{b1}</Text>
                    </TouchableOpacity>
                    :
                    b1 === "DEL" ?
                    <TouchableOpacity onPress={() => deleteInput(b1)} style={[styles.number,{backgroundColor:"#606060"}]}>
                        <Text style={styles.font}>{b1}</Text>
                    </TouchableOpacity>
                    :
                    b1 === "=" ?
                    <TouchableOpacity onPress={() => pressEqual(b1)} style={[styles.number,{backgroundColor:"#404040"}]}>
                        <Text style={styles.font}>{b1}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => pressDigit(b1)} style={styles.number}>
                        <Text style={{fontSize:25}}>{b1}</Text>
                    </TouchableOpacity>
                    
                )
            })
        }
      </View>
    </View>
  )
}

let styles = StyleSheet.create({
    container: {
        flex : 1,
        // backgroundColor : "black"
    },
    screen : {
        flex : 1,
        backgroundColor: "black",
        justifyContent:"flex-end",
        alignItems: "flex-end",
        

    },
    text: {
        fontSize: 50,
        paddingRight:10,
        paddingLeft: 10
    },
    button : {
        flex : 2,
        flexDirection:"row",
        backgroundColor:"black",
        flexWrap: "wrap",
        justifyContent: "space-around",
        textAlign: "center",
    },
    number : {
        width : "25%",
        height : "20%",
        justifyContent: "center",
        alignItems: "center",
        color:"black",
        borderWidth:10,
        borderRadius:30
    },
    font: {
        color : "white",
        fontSize: 20
    }    

})