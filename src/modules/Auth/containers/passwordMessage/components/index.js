import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

//styles
import styles from './styles';

//lib
import {Actions} from 'react-native-router-flux';

//components
import Button from 'components/Button';
import strings from 'config/strings';

const PasswordMessage = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButtonContainer}
        onPress={() => Actions.reset('FirstView')}>
        <Image
          source={require('assets/imgs/close.png')}
          style={styles.closeButton}
        />
      </TouchableOpacity>
      <Text style={styles.messageText}>{strings.receivePassword}</Text>
      <Image
        source={require('assets/imgs/passwordMessage.png')}
        style={styles.passwordMessage}
        resizeMode="cover"
      />
      <View style={styles.ButtonContainer}>
        <Button
          big
          content={strings.understand}
          onPress={() => Actions.reset('Login')}
        />
      </View>
    </View>
  );
};

export default PasswordMessage;
