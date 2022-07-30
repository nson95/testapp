import { StyleSheet } from 'react-native';

import { Theme } from '../../models/Theme';

//do not worry about theme for styles right now
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginTop: 70,
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    inputContainer: {
      height: '75%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer: {
      height: '15%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    cardContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '80%',
      height: '50%',
      backgroundColor: theme.white,
      opacity: 0.8,
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderRadius: 8,
      borderColor: '1px solid rgba(0, 0, 0, 0.05)',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 20,
    },
    welcomeText: {
      color: theme.white,
      fontSize: 36,
      marginLeft: 10,
    },
    subWelcomeText: {
      color: theme.white,
      fontSize: 36,
      marginLeft: 10,
    },
    textMargin: {
      marginTop: 15,
    },
    titleColor: {
      // return to font
      // fontFamily: 'NunitoSans-Black',
      color: theme.black,
      fontSize: 36,
    },
  });
