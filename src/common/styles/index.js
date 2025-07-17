import {
  Dimensions,
  Platform,
  PixelRatio,
  StatusBar,
  I18nManager,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {height, width, scale} = Dimensions.get('window');

export default {
  DeviceHeight:
    Platform.OS === 'android'
      ? Math.trunc(StatusBar.currentHeight) > 24
        ? height
        : height - StatusBar.currentHeight
      : getStatusBarHeight(true) <= 20
      ? height - getStatusBarHeight(true)
      : height - getStatusBarHeight(true) * 1.815,
  DeviceWidth: width,
  DeviceScale: scale,
  FontSize: {
    mostTiny: 10 / PixelRatio.getFontScale(),
    tiny: 12 / PixelRatio.getFontScale(),
    small: 14 / PixelRatio.getFontScale(),
    minMedium: 15 / PixelRatio.getFontScale(),
    medium: 16 / PixelRatio.getFontScale(),
    big: 18 / PixelRatio.getFontScale(),
    large: 20 / PixelRatio.getFontScale(),
    yLarge: 22 / PixelRatio.getFontScale(),
    xLarge: 25 / PixelRatio.getFontScale(),
    xxLarge: 28 / PixelRatio.getFontScale(),
    xxxLarge: 30 / PixelRatio.getFontScale(),
    mostLarge: 47 / PixelRatio.getFontScale(),
    f8: RFValue(8, 812),
    f10: RFValue(10, 812),
    f11: RFValue(11, 812),
    f12: RFValue(12, 812),
    f13: RFValue(13, 812),
    f14: RFValue(14, 812),
    f15: RFValue(15, 812),
    f16: RFValue(16, 812),
    f17: RFValue(17, 812),
    f18: RFValue(18, 812),
    f19: RFValue(19, 812),
    f20: RFValue(20, 812),
    f25: RFValue(25, 812),
    f30: RFValue(30, 812),
  },
  FontFamily: {
    nextMedium: 'Metropolis-Medium',
    nextSemiBold: 'Metropolis-SemiBold',
    nextRegular: 'Metropolis-Regular',
    nextBold: 'Metropolis-Bold',
  },
  BorderRadius: {
    tiny: 12 / PixelRatio.getFontScale(),
    small: 14 / PixelRatio.getFontScale(),
    medium: 16 / PixelRatio.getFontScale(),
    big: 18 / PixelRatio.getFontScale(),
    large: 20 / PixelRatio.getFontScale(),
    maxLarge: 23 / PixelRatio.getFontScale(),
    maxXLarge: 40 / PixelRatio.getFontScale(),
  },
  Shadow: {
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  activeOpacity: 0.6, //for TouchableOpacity when we pressed
};
