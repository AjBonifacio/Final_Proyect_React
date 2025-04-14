import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import About from "./screens/About";


const Drawer = createDrawerNavigator();


export const Navigation =()=>{
    return (
        <NavigationContainer>
                 <Drawer.Navigator initialRouteName="Home">
                            <Drawer.Screen name='Home' component={Home}/>
                            <Drawer.Screen name='about' component={About}/>
                 </Drawer.Navigator>
        </NavigationContainer>
    );
}