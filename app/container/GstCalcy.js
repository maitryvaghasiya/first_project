// import { View, Text, SafeAreaView, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'


// export default function GstCalcy() {


//     let [getresult, setresult] = useState(0);
//     let [getdata, setdata] = useState(0);

//     let gstcl = () => {
//         let result = parseInt(getdata) * 10/100;
//         setresult(result)
//     }  

//     return (
//         <View style={styles.container}>  
//             <SafeAreaView style={styles.safearea}>
//                 <Text style={styles.text}>{getresult}</Text>
//                 <TextInput style={styles.input}
//                     placeholder='Please Enter Your Amount'
//                     keyboardType='decimal-pad'
//                     onChange={data => setdata(data)} />
//                 <TouchableOpacity onPress={gstcl} >
//                     <Text style={styles.btn} >Calculate </Text>
//                 </TouchableOpacity> 
//             </SafeAreaView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:"#A95C68"
//     },
//     text:{
//         color:'white',
//         backgroundColor:'black',
//         // margin:20,
//         fontSize:40,
//         padding:60, 
//         // fontFamily:'Saira-BoldItalic',
//         textAlign:'center',
//         // borderRadius:20
        
//     },
//     input:{
//        fontSize:24,
//        margin:40 ,
//        color:'black',
//        textAlign:'center'
//     },
//     btn:{
//         fontSize:30,
//         backgroundColor:'black',
//         color:"white",
//         width:210,
//         padding:10,
//         // borderRadius:20,
//         textAlign:'center',
//         alignSelf:'center',
//         marginBottom:350,
//         fontFamily:'Saira-BoldItalic',
//     }

// })

import { View, Text, SafeAreaView, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { images } from '../assets/images';
// import { normalize } from '../utils';
// import colors from '../theme/colors';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function GstCalcy() {

    const [amount, setAmount] = useState('');
    const [gst, setGst] = useState('');
    const [gstAmount, setGstAmount] = useState('');
    const [show, setShow] = useState(0);

    const handleAmount = (text) => {
        setAmount(text)
    }
    const handleGst = (text) => {
        setGst(text)
    }

    const calculate = (amount, gst) => {
        let count = ((amount * gst) / 100)
        count = count.toFixed(2);
        setGstAmount(count);
    }

    const GrossAmount = (parseInt(amount) + parseFloat(gstAmount)).toFixed(2);

    const GST = (gst / 2).toFixed(2)

    const GSTAmount = (gstAmount / 2).toFixed(2);

    const Remove = () => {
      setGstAmount('');
      setGst('');
      setAmount('');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View>
                <View style={styles.Card}>
                    {/* <Image style={styles.Logo} source={images.IMG_React_Png} /> */}
                    <Text style={styles.TitleName}>GST Calculator</Text> 
                </View>
                {/* borderWidth: normalize(2), marginHorizontal: normalize(5)  */}
                <View style={{ borderColor: '#004b93' }} />  
                {/* margin: normalize(10)                   */}
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.Amount}>Initial Amount(₹)</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder='Enter your amount...'
                        onChangeText={(rupees) => {
                            handleAmount(rupees);                            
                        }}
                    />
                </View>
                {/* margin: normalize(10) */}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.GSTRate}>Rate of GST(%)</Text>
                    <TextInput
                        style={styles.Input}
                        placeholder='Enter gst rate...'
                        onChangeText={(rate) => {
                            handleGst(rate)
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.CalculateBox} onPress={() => {
                    calculate(amount, gst)
                    setShow(1)
                }}>
                    <Text style={styles.CalculateGst}>Calculate GST</Text>
                </TouchableOpacity>
                {/* borderWidth: normalize(1), marginHorizontal: normalize(5) */}

                <View style={{ borderColor: '#004b93' }} />
                {show === 1 &&
                    <>
                    {/* margin: normalize(10) */}
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Amount}>Net Amount(₹)</Text>
                            <View style={styles.OutputBox}>
                                <Text style={styles.Output}>{amount}</Text>
                            </View>
                        </View>
                        {/* margin: normalize(10) */}
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.GSTRate}>GST Amount(₹)</Text>
                            <View style={styles.OutputBox}>
                                <Text style={styles.Output}>{gstAmount}</Text>
                            </View>
                        </View>
                        {/* margin: normalize(10) */}
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.GSTRate}>Total Amount(₹)</Text>
                            <View style={styles.OutputBox}>
                                <Text style={styles.Output}>{GrossAmount}</Text>
                            </View>
                        </View>
                        {/* borderWidth: normalize(1), marginHorizontal: normalize(5) */}
                        <View style={{ borderColor: '#004b93' }} />
                        {/* margin: normalize(10) */}
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.Amount}>CGST</Text>
                            <Text style={styles.Amount}>{GST}%</Text>
                            <View style={styles.OutputBox}>
                                <Text style={styles.Output}>{GSTAmount}</Text>
                            </View>
                        </View>
                        {/* margin: normalize(10) */}
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.GSTRate}>SGST</Text>
                            <Text style={styles.Amount}>{GST}%</Text>
                            <View style={styles.OutputBox}>
                                <Text style={styles.Output}>{GSTAmount}</Text>
                            </View>
                        </View>
                        {/* borderWidth: normalize(1), marginHorizontal: normalize(5) */}
                        <View style={{ borderColor: '#004b93' }} />
                        <Text style={styles.ThankYou}>-: Thank You :-</Text>
                        <TouchableOpacity style={styles.CalculateBox} onPress={() => {
                            setShow(0);
                            Remove();
                            }}>
                            <Text style={styles.CalculateGst}>Remove GST</Text>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Card: {
        // margin: normalize(5),
        // borderRadius: normalize(15),
        backgroundColor: '#000000',
        // shadowColor: colors.black,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.0,
        elevation: 5,
        zIndex: 1,
        flexDirection: 'row',
    },
    TitleName: {
        // fontSize: normalize(25),
        fontWeight: 'bold',
        // color: colors.extraLight,
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        // marginRight: normalize(25)
    },
    Logo: {
        // height: normalize(50),
        // width: normalize(50),
    },
    Amount: {
        // fontSize: normalize(20),
        fontWeight: '600',
        alignSelf: 'center',
        flex: 1
    },
    GSTRate: {
        // fontSize: normalize(20),
        fontWeight: '600',
        alignSelf: 'center',
        flex: 1
    },
    Input: {
        // borderColor: colors.black,
        // borderWidth: normalize(2),
        // padding: normalize(8),
        width: '50%',
        // fontSize: normalize(18),
        fontWeight: '600',
        // borderRadius: normalize(8),
    },
    CalculateBox: {
        backgroundColor: '#000000',
        // margin: normalize(10),
        // borderRadius: normalize(8)
    },
    CalculateGst: {
        // fontSize: normalize(20),
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center',
        // padding: normalize(8),
        // color: colors.extraLight
    },
    Output: {
        // fontSize: normalize(18),
        fontWeight: '600',
        // padding: normalize(8)
    },
    OutputBox: {
        // borderColor: colors.black,
        // borderWidth: normalize(2),
        width: '50%',
        height: 42,
        // borderRadius: normalize(8),
    },
    ThankYou: {
        fontWeight: '700',
        // fontSize: normalize(30),
        alignSelf: 'center',
        // marginVertical: normalize(10)
    }
});