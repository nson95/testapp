import { StyleSheet } from 'react-native';

import { Theme } from '../../models/Theme';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    circle: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
    },
    circleColumn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    circleMargin: {
      marginTop: 10,
      marginBottom: 20,
    },
    textSize: {
      fontSize: 12,
    },
  });
