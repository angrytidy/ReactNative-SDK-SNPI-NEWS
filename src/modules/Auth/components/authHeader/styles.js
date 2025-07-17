import styles from 'styles';
import colors from 'colors';

const {FontFamily} = styles;

import {ScaledSheet} from 'react-native-size-matters/extend';
import {I18nManager} from 'react-native';

export default ScaledSheet.create({
  container: {
    paddingTop: '18@vs',
    paddingBottom: '18@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '9@s',
  },
  backImage: {
    height: '30@vs',
    width: '30@s',
    marginLeft: '18@s',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  title: {
    fontSize: '22@ms0.3',
    color: colors.orange_one,
    fontFamily: FontFamily.nextSemiBold,
  },
});
