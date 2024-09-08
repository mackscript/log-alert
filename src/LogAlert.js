// LogAlert.js
import { Alert } from 'react-native';

/**
 * Function to show custom alert with background color and text color
 * @param {string} message - The message to be displayed in the alert.
 * @param {string} backgroundColor - The background color for the alert box.
 * @param {string} textColor - The text color for the alert message.
 */
const LogAlert = {
  show: (message, backgroundColor = '#000000', textColor = '#ffffff') => {
    Alert.alert(
      'Custom Alert',
      message,
      [
        {
          text: 'OK',
          style: 'default',
        },
      ],
      { cancelable: true }
    );
    console.log(
      `%c ${message}`,
      `background: ${backgroundColor}; color: ${textColor}; padding: 5px 10px;`
    );
  },
};

export default LogAlert;
