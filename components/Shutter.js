import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { EvilIcons } from "@expo/vector-icons";

export default class Shutter extends Component {
    render() {
        return (
     <View style={{ justifyContent:'center',alignItems:'center',borderColor:'white',borderRadius:50,borderWidth:5,height:100,width:100}}>
                <EvilIcons name="camera" color="white" size={50}/>
            </View>       
        )
    }
}


export  class ShutterSquare extends Component {
    render() {
        return (
     <View style={{ justifyContent:'center',alignItems:'center',borderColor:'white',borderRadius:6,borderWidth:5,height:50,width:50}}>
                <EvilIcons {...this.props}/>
            </View>       
        )
    }
}
