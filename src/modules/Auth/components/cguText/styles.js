import styles from 'styles';
import colors from 'colors';

const {DeviceWidth, FontFamily} = styles;

import {ScaledSheet} from 'react-native-size-matters/extend';

export default ScaledSheet.create({
  cguText: {
    fontSize: '9@ms0.3',
    marginHorizontal: DeviceWidth * 0.1,
    lineHeight: '18@vs',
    fontFamily: FontFamily.nextRegular,
    color: colors.black_one,
    textAlign: 'left',
  },
  blueCguText: {
    color: colors.blue_one,
  },
});
