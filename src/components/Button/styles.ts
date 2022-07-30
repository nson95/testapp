import { StyleSheet, Platform } from 'react-native';

import { Theme } from '../../models/Theme';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      width: '60%',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderRadius: 22,
      shadowColor: theme.black,
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.05,
      ...Platform.select({
        android: {
          elevation: 1,
        },
      }),
    },
    buttonPrimary: {
      borderWidth: 4,
      borderColor: 'white',

      backgroundColor: theme.primaryButtonBackground,
      shadowRadius: 16,
    },
    buttonDanger: {
      backgroundColor: theme.dangerButtonBackground,
    },
    buttonSignUp: {
      backgroundColor: '#14213D',
    },
    primaryText: {
      color: theme.buttonText,
    },
    dangerText: {
      color: theme.buttonText,
    },
    signUpText: {
      color: theme.white,
    },

    text: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 20,
    },
  });
