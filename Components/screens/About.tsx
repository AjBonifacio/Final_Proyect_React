import { Text,Image,View,StyleSheet,FlatList,Linking,ScrollView } from "react-native";
import React from "react";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";

const Data = [
    {
    name: "Angelo Bonifacio",
     picture:require("../../assets/memberGroup/will.jpg"),
     Matricula: "2023-",
     telephone: "849-341-8291",
     telegram: "https://music.youtube.com/watch?v=P1YVpoyHsmQ&list=RDAMVMP1YVpoyHsmQ",
    },
    {
        name:
         "Delio Rodriguez",
        picture:require("../../assets/memberGroup/foto1.jpg"),
        Matricula: "2023-",
        telephone: "800-000-0000",
        telegram: "ni idea",},
    {
        name: 
        "Ivo Rodriguez",
        picture: require("../../assets/memberGroup/foto2.jpg"),
        Matricula: "2023-",
        telephone: "800-000-0000",
        telegram: "eso mismo",},
    {
        name: "Dayner",
        picture:require("../../assets/memberGroup/foto3.jpg"),
        Matricula: "2023-",
        telephone: "800-000-0000",
        telegram: "queseyo",
    }
]
type itemProps = {name:string,Matricula:string,picture:string,telephone:string,telegram:string};

const Profiles = ({name,Matricula,picture,telephone,telegram}:itemProps) => (
    <View style={style.profile}>
        <Image style={style.Imagen} source={picture}/>
        <Text style={style.textTitle}>{name}</Text>
        <Text>{Matricula}</Text>
        <Text>{telephone}</Text>
        <Text style={{color:'blue'}} 
                 onPress={()=> Linking.openURL(telegram)}>Link Telegram</Text>
    </View>
)


export default function About(){
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView>
                  <View style={style.container}>

                       <Text style={style.textTitle} >Miembros del Grupo</Text>
                     <FlatList  
                      data={Data}
                      renderItem={({item})=> <Profiles name={item.name} 
                                              Matricula={item.Matricula} 
                                              picture={item.picture} 
                                              telephone={item.telephone}
                                              telegram={item.telegram}
                                              />}
                    />
                  </View>
                </ScrollView>
           </SafeAreaView>
        </SafeAreaProvider>
      
    );
}


const style = StyleSheet.create({
    container : {flex: 1},
    text: { },
    textTitle:{
        fontSize:20,
        alignSelf:'center'
    },
    profile:{
        padding:20,
        marginVertical:8,
        marginHorizontal:18,
        backgroundColor:'#f9f9f9'
    },
    Imagen:{
        width:50,
        height:70,
        alignSelf:'center'
    }
});