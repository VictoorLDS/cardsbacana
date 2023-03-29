import { Component } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const handlePress = () => {}


export default class Card extends Component{
    render(){
        
        
        return(
            <View style={styles.Card}>
                <Image
                style={styles.img}
                source = {this.props.img}/>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{
                        padding: 5, 
                    }}>{this.props.Titulo}</Text>

                    <TouchableOpacity
                        onPress={handlePress}>
                        <Icon name="trash" size={20} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img:{
        height: 200,
        width: 200,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    Card:{
            borderWidth: 3,
            borderColor: 'black',
            padding: 5,
            backgroundColor: 'white',
            marginBottom: 4,
            marginTop: 40,
            justifyContent: "center",
    }
})