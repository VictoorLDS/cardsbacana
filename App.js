import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import SegundoCard from './src/components/SegundoCard';
import TerceiroCard from './src/components/TerceiroCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
      <SegundoCard/>
      <TerceiroCard/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
