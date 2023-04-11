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
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginHorizontal: 10 }}>{props.curtida}</Text>
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
      id: 1,
      Titulo: "The Forever Story - JID",
      img: require("./assets/imgs/theforeverstory.jpeg"),
    },
    {
      id: 2,
      Titulo: "Blonde - Frank Ocean",
      img: require("./assets/imgs/blonde.jpeg"),
    },
    {
      id: 3,
      Titulo: "Flower Boy - Tyler, The Creator",
      img: require("./assets/imgs/flowerboy.jpeg"),
    },
    {
      id: 4,
      Titulo: "Astroworld - Travis Scott",
      img: require("./assets/imgs/astroworld.jpeg"),
    },
  ];

  const [curtidas, setCurtidas] = useState(albuns.map(() => 0));

  function adicionar(id) {
    const novasCurtidas = [...curtidas];
    const index = albuns.findIndex((album) => album.id === id);
    novasCurtidas[index] += 1;
    setCurtidas(novasCurtidas);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Álbuns Escutados</Text>
        <View>
          {albuns.map((album, index) => (
            <Card
              key={album.id}
              album={album}
              curtida={curtidas[index]}
              adicionar={() => adicionar(album.id)}
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
