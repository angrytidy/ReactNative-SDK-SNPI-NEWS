import {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

export default function useKeyboardAware() {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const _keyboardDidShow = () => {
      setDisplay(false);
    };

    const _keyboardDidHide = () => {
      setDisplay(true);
    };

    let keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );

    let keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return display;
}
