import { Component } from "react";
import { StyleSheet, Image, View } from "react-native";

export default class Card extends Component{
    render(){
        return(
            <View>
                <Image
                style={{
                    height: 100,
                    width: 200,
                }}
                source = {require('../components/imgs/veigh.jpg')}/>
            </View>
        )
    }
}