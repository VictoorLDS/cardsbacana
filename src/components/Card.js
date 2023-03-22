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
                marginTop: 40,
                
                
            }}>
                <Image
                style={{
                    height: 200,
                    width: 200,
                    borderWidth: 3,
                    borderColor: 'black'
                }}
                source = {this.props.img}/>
                <Text style={{
                    padding: 5, 
                    textAlign: 'center',
                }}>{this.props.Titulo}</Text>
            </View>
        )
    }
}