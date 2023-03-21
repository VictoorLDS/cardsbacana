import { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

export default class Card extends Component{
    render(){
        return(
            <View style={{
                borderWidth: 3,
                borderColor: 'black',
                padding: 5,
                backgroundColor: 'white',
                marginBottom: 4,
                
                
            }}>
                <Image
                style={{
                    height: 200,
                    width: 200,
                    borderWidth: 3,
                    borderColor: 'black'
                }}
                source = {require('../components/imgs/theforeverstory.jpeg')}/>
                <Text style={{
                    padding: 5, 
                    textAlign: 'center',
                }}>The Forever Story - JID</Text>
            </View>
        )
    }
}