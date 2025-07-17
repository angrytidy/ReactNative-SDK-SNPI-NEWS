import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//styles
import styles from './styles';

const Switcher = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.value === props.values[0] ? (
        <>
          <View style={styles.ballSwitcher} />
          <Text style={styles.text}>{props.value}</Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>{props.value}</Text>
          <View style={styles.ballSwitcher} />
        </>
      )}
    </TouchableOpacity>
  );
};

export default Switcher;
