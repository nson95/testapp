import React from 'react';
import { ImageBackground } from 'react-native';

import { SIGNIN_IMAGE } from '../../lib/constants';

import { styles } from './styles';

export const SignInBackground: React.FC = ({ children }) => {
  return (
    <ImageBackground source={SIGNIN_IMAGE.signIn} style={styles.signIn}>
      {children}
    </ImageBackground>
  );
};
