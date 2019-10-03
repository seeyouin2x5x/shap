import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated';


export function Box(props){
    const {color='red',currency="cfa"} = props
    return(
        <Animated.View style={[styles.tag,{backgroundColor:'red'}]} >
            <Text style={{color:'white',textAlign:'center'}}>{props.price}</Text>
            <Text>{currency}</Text>

            </Animated.View>
    )
}



export default class PriceTag extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tag:{
        height:60,
        width:60,
        borderRadius:30,
        borderColor:'white',
        borderWidth:0.6,
        justifyContent:'center',
        alignItems:'center',
    }
})