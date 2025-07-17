import React from 'react';
import {Text} from 'react-native';
import strings from '../../../../config/strings';

import styles from './styles';

const cgu = () => (
  <Text style={styles.cguText}>
    {strings.cguContinue}{' '}
    <Text
      style={(styles.cguText, styles.blueCguText)}
      onPress={() => alert('PRESS CGU')}>
      {strings.cgu}
    </Text>{' '}
    {strings.politicsRead}{' '}
    <Text
      style={(styles.cguText, styles.blueCguText)}
      onPress={() => alert('PRESS PC')}>
      {strings.po}{' '}
    </Text>
  </Text>
);

export default cgu;
