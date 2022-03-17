import React from "react";
import { StyleSheet, TouchableOpacity, Text} from "react-native";

const SimpleButton = ({btnTitle,...extra}) =>
{
    return(
        <TouchableOpacity style={styles.btnContainer} {...extra}>
            <Text style={styles.textWrap}>
                {btnTitle}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        width:150,
        backgroundColor:"#f78c28",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        marginTop:10,
    },
    textWrap:{
        fontFamily:"Ubuntu-Regular",
        fontSize:18,
        color:"#4d4137",
    }
});

export default SimpleButton;