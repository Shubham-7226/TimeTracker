import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () =>
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SigninScreen}/>
            <Stack.Screen name="SignUp" component={SignupScreen}/>
        </Stack.Navigator>
    );
}

export default AuthStack;