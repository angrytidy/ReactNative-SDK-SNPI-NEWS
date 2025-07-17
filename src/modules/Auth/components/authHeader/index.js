import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

//styles
import styles from './styles';

//lib
import {Actions} from 'react-native-router-flux';

const AuthHeader = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Image
          source={require('assets/imgs/back.png')}
          style={styles.backImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {props.title && (
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthHeader;
