//rotas em que apenas usuarios não autorizados podem acessar

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/Signin";

const Stack = createNativeStackNavigator()

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AuthRoutes