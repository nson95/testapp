import { StyleSheet, Platform } from 'react-native';

import { Theme } from '../../models/Theme';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    cardContainer: {
      width: '99%',
      height: '15%',
      backgroundColor: '#FDE1B1',
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderTopWidth: 2,
      borderRadius: 12,
      borderColor: '#FCA311',
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 20,
      // save for when I do android
      // ...Platform.select({
      //   ios: {
      //     shadowRadius: 2,
      //     shadowOffset: { width: 2, height: 8 },
      //     shadowOpacity: 0.12,
      //   },
      //   android: {
      //     elevation: 1,
      //   },
      // }),
    },
    titleText: {
      fontSize: 16,
      paddingBottom: 4,
      fontWeight: '500',
      color: 'black',
    },
    bodyText: {
      fontSize: 12,
      fontWeight: '400',
      color: 'black',
    },
  });
