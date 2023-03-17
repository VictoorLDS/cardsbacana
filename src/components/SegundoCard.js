import { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export default class Card extends Component{
    render(){
        return(
            <View style={{
                borderWidth: 3,
                borderColor: 'black',
                
            }}>
                <Image
                style={{
                    height: 225,
                    width: 225,
                    borderWidth: 3,
                    borderColor: 'black'
                }}
                source = {require('../components/imgs/alee.jpg')}/>
                <Text>Alee</Text>
            </View>
        )
    }
}