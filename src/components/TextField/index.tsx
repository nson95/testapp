import React from 'react';
import { TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../lib/hooks/useTheme';
import { styles as stylesWrapper } from './styles';

interface CustomInputProps {
  placeHolder?: string;
}

export const TextField: React.FC<CustomInputProps> = ({ placeHolder }) => {
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  // const openEditPress = () => {
  //   navigation.navigate(RouteName.EDIT_MEMBER, {
  //     userId: participantId,
  //     isParticipant,
  //   });
  // };

  return <TextInput style={styles.input} placeholder={placeHolder}></TextInput>;
};
