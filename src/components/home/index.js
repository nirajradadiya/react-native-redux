import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    Image,
    Modal
} from 'react-native';
import {Actions} from "react-native-router-flux";
import logoSrc from '../../images/logo-dark-bg.png';

import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#ccc',
      modalVisible: false,
      rent: '',
      tenant: '',
      landlord: ''
    };
  }

  userLogin (e) {
    this.props.onLogin(this.state.rent, this.state.tenant, this.state.landlord);
    e.preventDefault();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onSwipeUp(gestureState) {
    this.setModalVisible(!this.state.modalVisible);
    Actions.success();
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer
        onSwipeUp={(state) => this.onSwipeUp(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>
              Rent : 
          </Text>
          <TextInput
              style={styles.textInput}
              ref="textInput"
              underlineColorAndroid={'transparent'}
              onChangeText={text => this.setState({ rent: text })}
              value={this.state.rent} 
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>
              Tenant : 
          </Text>
          <TextInput
              style={styles.textInput}
              ref="textInput"
              underlineColorAndroid={'transparent'}
              onChangeText={text => this.setState({ tenant: text })}
              value={this.state.tenant} 
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>
              Landlord : 
          </Text>
          <TextInput
              style={styles.textInput}
              ref="textInput"
              underlineColorAndroid={'transparent'}
              onChangeText={text => this.setState({ landlord: text })}
              value={this.state.landlord} 
          />
        </View>

        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={(e) => this.userLogin(e)}>
            <Text  style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>
                    Rent : 
                </Text>
                <TextInput
                    style={styles.textInputEdit}
                    ref="textInput"
                    underlineColorAndroid={'transparent'}
                    value={this.props.rent}
                    editable={false}
                />
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>
                    Tenant : 
                </Text>
                <TextInput
                    style={styles.textInputEdit}
                    ref="textInput"
                    underlineColorAndroid={'transparent'}
                    value={this.props.tenant}
                    editable={false}
                />
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.labelText}>
                    Landlord : 
                </Text>
                <TextInput
                    style={styles.textInputEdit}
                    ref="textInput"
                    underlineColorAndroid={'transparent'}
                    value={this.props.landlord}
                    editable={false}
                />
              </View>
            </View>
          </View>
          <View style={styles.footerTop}>
              <Text style={styles.swipeText}>Swipe up to confirm</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
                onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }} style={styles.cancelbutton}>
              <Text style={styles.cancelText}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </KeyboardAvoidingView>
      </GestureRecognizer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      rent: state.rent,
      tenant: state.tenant,
      landlord: state.landlord
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (rent, tenant, landlord) => {
      dispatch(login(rent, tenant, landlord));
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelContainer : {
    flexDirection: 'row',
    width: 300,
    marginBottom: 15
  },
  labelText : {
    paddingRight: 10,
    fontSize: 18,
    color: '#000',
    width: 100
  },
  textInput : {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    flex: 1,
    fontSize: 13
  },
  textInputEdit: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    padding: 4,
    flex: 1,
    fontSize: 13,
    backgroundColor: '#E8E8E8'
  },
  buttonContainer:{
    flex: 1,
    backgroundColor: '#2980b6',
    paddingVertical: 15,
    borderRadius: 30,
    fontSize: 14
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  formContainer: {
    padding: 20,
    flexDirection  : 'row'
  },
  cancelbutton: {
    flex: 1,
    backgroundColor: '#2980b6',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  footerTop: {
    position: 'absolute',
    flex:1,
    left: 0,
    right: 0,
    bottom: 80,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  footer: {
    position: 'absolute',
    flex:1,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection:'row',
    alignItems:'center'
  },
  swipeText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);