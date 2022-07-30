import { StyleSheet } from 'react-native';
import { Theme } from '../../models/Theme';

//do not worry about theme for styles right now
export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 20,
    },
    innerContainer: {
      height: '70%',
      width: '80%',
      justifyContent: 'space-between',
    },
    buttonCallout: {
      width: '90%',
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      bottom: 30,
      justifyContent: 'flex-end',
    },
    boldText: {
      fontWeight: '600',
      fontSize: 16,
    },
    titleText: {
      fontSize: 18,
    },
  });
