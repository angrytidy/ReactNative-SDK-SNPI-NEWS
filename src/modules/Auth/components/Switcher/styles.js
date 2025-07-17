import styles from 'styles';
import colors from 'colors';

const {FontFamily} = styles;

import {ScaledSheet} from 'react-native-size-matters/extend';

export default ScaledSheet.create({
  container: {
    height: '40@vs',
    width: '123@s',
    backgroundColor: colors.orange_one,
    alignItems: 'center',
    borderRadius: '20@s',
    flexDirection: 'row',
    marginBottom: '27@vs',
    alignSelf: 'center',
  },
  ballSwitcher: {
    width: '40@s',
    height: '40@s',
    backgroundColor: colors.grey_Seven,
    borderRadius: '20@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    marginLeft: '9@s',
    color: colors.white,
    fontSize: '14@ms0.3',
    fontFamily: FontFamily.nextSemiBold,
    flex: 1,
    textAlign: 'left',
  },
});
