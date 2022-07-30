import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../models/RouteName';
import { Button } from '../../components/Button';
import { styles as stylesWrapper } from './styles';
import { useTheme } from '../../lib/hooks/useTheme';

export const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  const handleSignUpNavigation = () => {
    navigation.navigate(RouteName.SIGN_UP);
  };

  const handleMemberNavigation = () => {
    navigation.navigate(RouteName.LOGIN);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleColor}>Raise Hero</Text>
      <Text style={styles.inputStyle}>
        Hello. Expert fundraising advice at your fingertips.
      </Text>
      <View style={styles.buttonContainer}>
        <Button handlePress={handleSignUpNavigation}>create account</Button>
        <View style={styles.buttonPadding} />
        <TouchableOpacity>
          <Text style={styles.memberText} onPress={handleMemberNavigation}>
            already a member?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
