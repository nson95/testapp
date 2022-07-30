import { StyleSheet } from 'react-native';

import { Theme } from '../../models/Theme';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    input: {
      textAlign: 'center',
      height: 40,
      width: '90%',
      borderWidth: 2,
      borderColor: '#BEBEBE',
      borderRadius: 20,
      backgroundColor: theme.white,
    },
  });
