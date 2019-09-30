import React, { Component } from 'react'
import { Text, View,FlatList,TouchableOpacity } from 'react-native'
import { Avatar,Layout } from 'react-native-ui-kitten';
import { AntDesign } from "@expo/vector-icons";

export const AvatarShowcase = (props) => (
  <Avatar style={{margin:3}}
    source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
    size='large'
    shape='round'
  />
);

const content = [{id:1},{id:2}]
export class Home extends Component {
    render() {
        return (
            <Layout style={{flex:1}}>
                <View style={{flex:0.5}}>
                <FlatList ItemSeparatorComponent={()=><View style={{margin:5}}/>} keyExtractor={(item,index)=>item.index} horizontal={true} data={content} renderItem={()=><AvatarShowcase />} />
                <Text> on sales </Text>
                </View>
                
                <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:15,borderColor:'#f15861',borderWidth:5}}>

                    <AntDesign onPress={()=>this.props.navigation.navigate('Price')} name="camerao" size={42} color="#f15861" />
                    <Text> publish </Text>

                </View>

            </Layout>
        )
    }
}

export default Home
