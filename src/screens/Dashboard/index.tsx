import React from 'react';
import { View, ScrollView } from 'react-native';
import { useTheme } from '../../lib/hooks/useTheme';
import { styles as stylesWrapper } from './styles';
import { Button } from './../../components/Button';
import { DashboardCircle } from './../../components/DashboardCircle';
import dashBoardData from '../../assets/data/dashBoardData.json';

export const Dashboard: React.FC = () => {
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.row}>
          {dashBoardData.map((dashboard) => (
            <DashboardCircle
              key={dashboard.id}
              title={dashboard.title}
              value={dashboard.route}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonCallout}>
        <Button>next</Button>
      </View>
    </ScrollView>
  );
};
