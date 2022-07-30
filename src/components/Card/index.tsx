import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../models/RouteName';
import { useTheme } from '../../lib/hooks/useTheme';
import { styles as stylesWrapper } from './styles';

interface CardProps {
  title?: string;
  id?: number;
  body?: string;
}

export const Card: React.FC<CardProps> = ({ title, id, body }) => {
  const navigation = useNavigation();
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  // const openEditPress = () => {
  //   navigation.navigate(RouteName.EDIT_MEMBER, {
  //     userId: participantId,
  //     isParticipant,
  //   });
  // };

  const handleConsultantRoute = () => {
    navigation.navigate(RouteName.SESSION);
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={handleConsultantRoute}
    >
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.bodyText}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};
