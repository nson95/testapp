import { StyleSheet } from 'react-native';

import { Theme } from '../../models/Theme';

//do not worry about theme for styles right now
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      padding: 20,
      backgroundColor: theme.signUpBackground,
    },
    innerContainer: {
      marginTop: 20,
      padding: 20,
    },
    inputStyle: {
      color: theme.white,
      fontSize: 42,
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    buttonPadding: {
      paddingTop: 20,
    },
    titleColor: {
      color: theme.white,
      fontSize: 24,
    },
    memberText: {
      color: theme.white,
      fontSize: 16,
    },
  });
