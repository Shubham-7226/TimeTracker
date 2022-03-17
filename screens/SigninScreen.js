import React , { useState, useContext} from "react";
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, Platform} from "react-native";
import InputField from "../components/InputField";
import SimpleButton from "../components/SimpleButton";
import SocialButton from "../components/SocialButton";
import { AuthContext } from "../navigaion/AuthProvider";

const SigninScreen = ({navigation}) =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {login} = useContext(AuthContext);

    const signInHandler = () =>
    {

        if(email === "" || password === ""){
            Alert.alert(
                "Empty Fields!",
                "Please! Fill up all Fields.",
                [{text:"Okay",onPress:()=>{},style:"cancel"}]
            )
        } else {
            console.log(email);
            console.log(password);
            
            login(email,password);

            setEmail("");
            setPassword("");
        }

    };

    const iosContainer = () =>
    {
        return(
            <SocialButton
                    iconName={"apple"}
                    iconColor={"#0a0a0a"}
                    btnBgColor={"#f0eded"}
                    btnTitle={"Signin With Apple"}/> 
        );
    };

    return(
        <View style={styles.screen}>
            
            <Text style={styles.textWrap}>
                Signin
            </Text>

            <Image 
                source={require("../assets/logo.png")} 
                resizeMode="contain" 
                style={styles.logoContainer}
            />

            <View style={styles.formContainer}>
                
                <InputField 
                    iconName={"envelope-o"} 
                    placeholder="Email" 
                    keyboardType="email-address"
                    onChangeText={data => setEmail(data)}
                    inputValue = {email}/>
                
                <InputField 
                    iconName={"lock"} 
                    placeholder="Password" 
                    secureTextEntry={true}
                    onChangeText={data => setPassword(data)}
                    inputValue={password}/>
                
                <SimpleButton
                    btnTitle={"SignIn"}
                    onPress={signInHandler}
                />

            </View>

            <TouchableOpacity 
                onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.simpleText}>
                        Don't have an acount? Create here
                    </Text>
            </TouchableOpacity>

            <View style={styles.socialContainer}>
                <SocialButton 
                    iconName={"facebook-official"} 
                    iconColor={"#4267B2"}
                    btnBgColor={"#c7d9fc"}
                    btnTitle={"Signin With Facebook"}/>

                <SocialButton
                    iconName={"google"}
                    iconColor={"#EA4335"}
                    btnBgColor={"#fcc9c5"}
                    btnTitle={"Signin With Gmail"}/>

                {Platform.OS === "ios" ? iosContainer : ""}
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
    },
    simpleText:{
        fontSize: 18,
        fontWeight:'500',
        color: '#666',
        fontFamily:"Ubuntu-Medium",
    },
    formContainer:{
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center",
    },
    socialContainer:{
        marginTop:10,
    },
    logoContainer:{
        width:150,
        height:150,
        marginBottom:5,
    },
    textWrap:{
        fontFamily:"Ubuntu-Medium",
    },
    btnContainer:{
        marginTop:10,
    },
})

export default SigninScreen;