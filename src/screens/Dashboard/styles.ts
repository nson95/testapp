// import { StyleSheet } from 'react-native';

// import { Theme } from '../../models/Theme';

// //do not worry about theme for styles right now
// export const styles = (theme: Theme) =>
//   StyleSheet.create({
//     safeAreaView: {
//       flex: 1,
//     },
//     container: {
//       backgroundColor: theme.black,
//     },
//     titleColor: {
//       paddingTop: 70,
//       color: theme.black,
//       fontSize: 24,
//     },
//     cardContainer: {
//       display: 'flex',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//     },
//   });
import { StyleSheet } from 'react-native';

import { Theme } from '../../models/Theme';

//do not worry about theme for styles right now
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 28,
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '75%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    buttonCallout: {
      width: '90%',
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      bottom: 30,
      justifyContent: 'flex-end',
    },
  });
