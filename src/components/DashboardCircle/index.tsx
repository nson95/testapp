import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../lib/hooks/useTheme';
import { styles as stylesWrapper } from './styles';

interface DashboardCircleProps {
  title?: string;
  value: string;
}

export const DashboardCircle: React.FC<DashboardCircleProps> = ({
  title,
  value,
}) => {
  const navigation = useNavigation();
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  const handleConsultantRoute = () => {
    console.log(value);
    navigation.navigate(value);
  };

  return (
    <View style={styles.circleColumn}>
      <TouchableOpacity style={styles.circle} onPress={handleConsultantRoute} />
      <View style={styles.circleMargin}>
        <Text style={styles.textSize}>{title}</Text>
      </View>
    </View>
  );
};
