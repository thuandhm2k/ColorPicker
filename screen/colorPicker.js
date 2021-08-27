import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from '../components/header';
import ColorControl from '../components/colorControl';
const colorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View style={styles.container}>
      <Header name="Color Picker" />
      <View style={styles.body}>
        <View style={styles.contentWrapper}>
          <View style={styles.controls}>
            <ColorControl
              title="R"
              value={red}
              onValueChange={value => {
                setRed(value);
              }}
            />
            <ColorControl
              title="G"
              value={green}
              onValueChange={value => {
                setGreen(value);
              }}
            />
            <ColorControl
              title="B"
              value={blue}
              onValueChange={value => {
                setBlue(value);
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            }}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    height: 400,
    width: 300,
    flexDirection: 'column',
  },
  controls: {
    flex: 1,
  },
});
export default colorPicker;
