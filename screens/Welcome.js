import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Alert, TouchableOpacity} from 'react-native';

const Welcome = props => {

  return (
      <View style={styles.view}>
          <Text style={styles.text}>INFM315</Text>
          <Text style={styles.text}>Kiril Nikolov - F89815</Text>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => props.changeScreenParam('0')}>
              <Text style={styles.btnText}>
                Enter App
              </Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'darkslateblue',
    fontSize: 23,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    borderRadius: 50,
    borderWidth: 1,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Welcome;