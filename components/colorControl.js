import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Slider} from 'react-native-elements';
const ColorControl = props => {
  return (
    <View style={styles.control}>
      <Text style={styles.title}>{props.title}</Text>
      <Slider
        style={styles.slider}
        value={props.value}
        thumbStyle={{height: 20, width: 20, backgroundColor: 'black'}}
        maximumValue={255}
        minimumValue={0}
        step={1}
        onValueChange={props.onValueChange}
      />
      <TextInput value={`${props.value}`} style={styles.textInput} />
    </View>
  );
};
const styles = StyleSheet.create({
  control: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 200,
    marginLeft: 10,
    marginRight: 10,
  },
  textInput: {
    width: 30,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    padding: 2,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ColorControl;
