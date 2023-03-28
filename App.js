import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.titulo}>Álbuns Escutados</Text>
      <Card Titulo = "The Forever Story - JID" img = {require('./assets/imgs/theforeverstory.jpeg')}/>
      <Card Titulo = "Blonde - Frank Ocean" img = {require('./assets/imgs/blonde.jpeg')}/>
      <Card Titulo = "Flower Boy - Tyler, The Creator" img = {require('./assets/imgs/flowerboy.jpeg')}/>
      <Card Titulo = "Astroworld - Travis Scott" img = {require('./assets/imgs/astroworld.jpeg')}/>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginTop: 105,
    fontSize: 30,
    color: 'white',
  }
});
