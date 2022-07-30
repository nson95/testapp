import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../models/RouteName';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';
import { styles as stylesWrapper } from './styles';
import { useTheme } from '../../lib/hooks/useTheme';
import { SignInBackground } from '../../components/SignInBackground';

export const Login: React.FC = () => {
  const navigation = useNavigation();
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  const handleSignUpNavigation = () => {
    navigation.navigate(RouteName.WELCOME);
  };

  const handleLoginNavigation = () => {
    navigation.navigate(RouteName.DASHBOARD);
  };

  return (
    <SignInBackground>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <Text style={styles.subWelcomeText}>Let's get to work.</Text>

        <View style={styles.inputContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.titleColor}>Raise Hero</Text>
            <View style={styles.textMargin} />
            <TextField placeHolder={'Username'} />
            <View style={styles.textMargin} />
            <TextField placeHolder={'Password'} />
            <View style={styles.textMargin} />
            <Button handlePress={handleLoginNavigation}>Login</Button>
            <View style={styles.textMargin} />
            <Text onPress={handleSignUpNavigation}>Forget password?</Text>
          </View>
        </View>
      </View>
    </SignInBackground>
  );
};
