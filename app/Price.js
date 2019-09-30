import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Layout,Input,Icon,Button } from 'react-native-ui-kitten';

const FacebookIcon = (style) => {
    
    return (
    <Icon {...style} name='checkmark-circle' />
  );}

export class PriceInput extends React.Component {

    state = {
        inputValue: '',
        secureTextEntry: true,
      };
    

  onInputValueChange = (inputValue) => {
    this.setState({ inputValue });
  };

  isValidInputValue = () => {
    return this.state.inputValue >1;
  };
  
  renderIcon = (style) => {
    const iconName = this.state.secureTextEntry ? 'pricetags-outline' : 'pricetags';
    return (
      <Icon {...style} name={iconName} />
    );
    }
    onIconPress = () => {
        const secureTextEntry = !this.state.secureTextEntry;
        this.setState({ secureTextEntry });
      };

      renderIconButton = (style) => {
        const iconName = this.state.secureTextEntry ? 'pricetags-outline' : 'pricetags';
        return (
          <Icon {...style} name={iconName} />
        );
        }
        onIconPress = () => {
            const secureTextEntry = !this.state.secureTextEntry;
            this.setState({ secureTextEntry });
          };
    
    
  render() {
    const isValidInputValue = this.isValidInputValue();
    return (
      <Input size="large" textStyle={styles.priceInput} autoFocus={true} keyboardType="decimal-pad" {...this.props}
        status={isValidInputValue ? 'success' : 'danger'}
        caption={isValidInputValue ? '' : 'say your price'}
        value={this.state.inputValue}
        onIconPress={this.onIconPress}
        icon={this.renderIcon}
        onChangeText={this.onInputValueChange}
      />
    );
  }
}

export  class Price extends Component {
    static navigationOptions = {
        title:'Amount'
    }

    _handleNext = ()=>{
        return this.props.navigation.navigate('CameraScreen')
    }
    render() {
        return (
            <Layout>
                <View style={{paddingHorizontal:24,paddingTop:12}}>
                    <PriceInput />
                    <Button onPress={this._handleNext} secureTextEntry={true} icon={FacebookIcon}>next</Button>

                </View>
            </Layout>
        )
    }
}



const styles = StyleSheet.create({
    priceInput:{
        textAlign:'center',
        fontSize:24,
        fontFamily:'space-mono',
        fontWeight:'600',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Price
