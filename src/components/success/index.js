import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import logoSrc from '../../images/success.png';

const Success = () => {
    return (
      <View behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.successText}>
            Success
          </Text>
          <Image style={styles.logo} source={logoSrc} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  successText: {
    fontSize: 14,
    color: '#000'
  },
  loginContainer:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain'
  }
});

export default Success;