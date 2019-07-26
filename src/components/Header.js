import React from 'react'
import {View,Text} from 'react-native'



const Header=(props)=>{
return(
    <View style={styles.headerStyle}>
<Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
)
}

styles={

    headerStyle:{
        padding:16,
        backgroundColor:"#f5f5dc",
        shadowColor:"black",
        shadowOffset:{height:2,width:2},
        shadowOpacity:0.9,
        alignItems:"center"
    },
    textStyle:{
        fontSize:25,
        fontWeight:"bold",
        

    }
}

export default Header;