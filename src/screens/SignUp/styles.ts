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
      paddingLeft: 10,
    },
    innerContainer: {
      height: '70%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      paddingLeft: 10,
    },
    titleMargin: {
      marginTop: 10,
    },
    subTitle: {
      fontSize: 18,
      fontWeight: '500',
    },
    checkBoxRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    fontMargin: {
      marginLeft: 10,
    },
    disclaimerMargin: {
      marginTop: 20,
    },
    disclaimerWidth: {
      width: '88%',
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
