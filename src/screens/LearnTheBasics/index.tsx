import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useTheme } from '../../lib/hooks/useTheme';
import { styles as stylesWrapper } from './styles';
import { Button } from './../../components/Button';
import { Card } from './../../components/Card';
import learnTheBasicsData from './../../assets/data/learnTheBasicsData.json';

export const LearnTheBasics: React.FC = () => {
  const { currentTheme } = useTheme();
  const styles = stylesWrapper(currentTheme);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>
            Text about why to start with the basics principles of giving, what
            are your leading questions, why give? What to expect? How to go
            about it.
          </Text>
          <Text style={styles.boldText}>Click on a free course to begin.</Text>

          {learnTheBasicsData.map((data) => (
            <Card key={data.id} title={data.title} body={data.body} />
          ))}

          <Text style={styles.boldText}>Next Step, find a consultant...</Text>
        </View>
        <View style={styles.buttonCallout}>
          <Button>next</Button>
        </View>
      </View>
    </ScrollView>
  );
};
