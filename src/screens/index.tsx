import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Dashboard } from '../screens/Dashboard';
import { LearnTheBasics } from '../screens/LearnTheBasics';
import { Welcome } from '../screens/Welcome';
import { SignUp } from '../screens/SignUp';

const Stack = createStackNavigator();

// this could work but it would take sometime to fool aroudn with
// function LogoTitle() {
//   return (
//     <View>
//       <Text>yo</Text>
//       <Text>yo</Text>
//     </View>
//   );
// }

export const Screens: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerLeft: null,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            title: 'What are you interested in?',
            headerStyle: {
              backgroundColor: '#14213D',
            },
            headerTintColor: '#fff',
          }}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{
            title: 'Learn the Basics',
            headerStyle: {
              backgroundColor: '#5AA5AA',
            },
            headerTintColor: '#fff',
          }}
          name="LearnTheBasics"
          component={LearnTheBasics}
        />
        <Stack.Screen
          options={{
            headerLeft: null,
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            title: 'Join Our Community',

            headerStyle: {
              backgroundColor: '#14213D',
            },
            headerTintColor: '#fff',
          }}
          // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
