import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../models/RouteName';
import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';

import { styles as stylesWrapper } from './styles';
import { useTheme } from '../../lib/hooks/useTheme';

export const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  const handleSignUpNavigation = () => {
    navigation.navigate(RouteName.DASHBOARD);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.subTitle}>Personal Information</Text>
          <View>
            <Text>First Name</Text>
            <View style={styles.titleMargin} />
            <TextField placeHolder={'first name'} />
          </View>

          <View>
            <Text>Last Name</Text>
            <View style={styles.titleMargin} />
            <TextField placeHolder={'last name'} />
          </View>

          <Text style={styles.subTitle}>Security</Text>

          <View>
            <Text>Email</Text>
            <View style={styles.titleMargin} />
            <TextField placeHolder={'email'} />
          </View>

          <View>
            <Text>Password</Text>
            <View style={styles.titleMargin} />
            <TextField placeHolder={'password'} />
          </View>

          <View>
            <Text>Confirm Password</Text>
            <View style={styles.titleMargin} />
            <TextField placeHolder={'confirm password'} />
          </View>
        </View>

        <View style={styles.checkBoxRow}>
          <CheckBox boxType="square" disabled={false} />
          <Text style={styles.fontMargin}>I accept the Terms of Use.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button variant={'signUp'} handlePress={handleSignUpNavigation}>
            Sign up
          </Button>
          <View style={styles.disclaimerMargin} />
          <View style={styles.disclaimerWidth}>
            <Text>
              By continuing, you agrre to accept our Privacy Policy and terms of
              service
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
