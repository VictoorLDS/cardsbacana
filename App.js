import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
/* import Card from "./src/components/Card";
 */ import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

function Card(props) {
  return (
    <View style={styles.Card}>
      <Image style={styles.img} source={props.album.img} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            padding: 5,
          }}
        >
          {props.album.Titulo}
        </Text>
        <View style={{flexDirection:"row"}}>
          <Text style={{marginHorizontal: 10}}>{props.curtida}</Text>
          <TouchableOpacity onPress={props.adicionar}>
            <AntDesign name="heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default function App() {
  const albuns = [
    {
      Titulo: "The Forever Story - JID",
      img: require("./assets/imgs/theforeverstory.jpeg"),
    },
    {
      Titulo: "Blonde - Frank Ocean",
      img: require("./assets/imgs/blonde.jpeg"),
    },
    {
      Titulo: "Flower Boy - Tyler, The Creator",
      img: require("./assets/imgs/flowerboy.jpeg"),
    },
    {
      Titulo: "Astroworld - Travis Scott",
      img: require("./assets/imgs/astroworld.jpeg"),
    },
  ];
  const [curtida, setCurtida] = useState(0);
  function adicionar(id) {
    setCurtida(curtida + 1);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Álbuns Escutados</Text>
        <View>
          {albuns.map((album) => (
            <Card
              album={album}
              curtida={curtida}
              adicionar={() => adicionar(1)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    borderWidth: 3,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  Card: {
    borderWidth: 3,
    borderColor: "black",
    padding: 5,
    backgroundColor: "white",
    marginBottom: 4,
    marginTop: 40,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    marginTop: 105,
    fontSize: 30,
    color: "white",
  },
});
