import styles from 'styles';
import colors from 'colors';

const {FontFamily, FontSize} = styles;

import {ScaledSheet} from 'react-native-size-matters/extend';

export default ScaledSheet.create({
  container: {
    flex: 1,
  },

  ButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '29@vs',
  },
  closeButton: {
    height: '24@vs',
    width: '24@s',
  },
  closeButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: '10@vs',
    marginRight: '29@s',
  },
  messageText: {
    fontSize: FontSize.f25,
    fontFamily: FontFamily.nextSemiBold,
    color: colors.blue_one,
    width: '261@s',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: '66@vs',
    lineHeight: '31@vs',
  },
  passwordMessage: {
    height: '200@vs',
    width: '200@s',
    alignSelf: 'center',
    marginTop: '79@vs',
  },
});
