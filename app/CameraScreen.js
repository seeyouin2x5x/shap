import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Shutter,{ShutterSquare} from '../components/Shutter';
import { Box } from '../components/PriceTag';
import PinchZoomView from 'react-native-pinch-zoom-view-movable';
import { EvilIcons } from '@expo/vector-icons';


export default class CameraExample extends React.Component {
  static navigationOptions = ({navigation})=>{
    return {
    headerLeft:(<EvilIcons color="white" onPress={()=>navigation.goBack()} name="close" size={24} style={{padding:15}} />),
    headerTransparent:true
  }
  }
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const price = this.props.navigation.getParam('price')
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1}} type={this.state.type}>
          <PinchZoomView>
            <Box price={price}/>
            </PinchZoomView>

            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent:'space-evenly'
              }}>
                 <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  margin:6
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
             <ShutterSquare name="image" color="white"/>
             </TouchableOpacity>
             <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  margin:6
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
             <Shutter />
             </TouchableOpacity>
             <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  margin:6

                }}
                onPress={() => {
                  
                }}>
             <ShutterSquare name="star" color="white"/>
             </TouchableOpacity>

            </View>
          </Camera>
        </View>
      );
    }
  }
}
