import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useTheme } from '../../lib/hooks/useTheme';

import { styles as stylesWrapper } from './styles';

type ButtonVariant = 'primary' | 'danger' | 'signUp';
interface ButtonProps {
  variant?: ButtonVariant;
  isDisabled?: boolean;
  isLoading?: boolean;
  handlePress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  handlePress,
  isDisabled,
  isLoading,
  children,
}) => {
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  return (
    <TouchableOpacity
      disabled={isDisabled || isLoading}
      style={[
        styles.button,
        variant === 'primary' && styles.buttonPrimary,
        variant === 'danger' && styles.buttonDanger,
        variant === 'signUp' && styles.buttonSignUp,
      ]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.text,
          variant === 'primary' && styles.primaryText,
          variant === 'danger' && styles.dangerText,
          variant === 'signUp' && styles.signUpText,
        ]}
      >
        {isLoading ? <Text>Loading...</Text> : children}
      </Text>
    </TouchableOpacity>
  );
};
