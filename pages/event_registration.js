import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import styles from '../App.style.js';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export const EventRegistration = ( props ) => { 
    const [data, setData] = useState([]);

   /* useEffect(() => {
      try {
        fetch('https://theapp.artidas.hu/tavernraid/mobile/achievement/list')
          .then(response => response.json())
          .then(data => {
            setData(data);
          }
          )
          .catch(error => {
            console.error(error);
          });
      } catch (error) {
        console.log('Hiba történt az adatok lekérésekor:', error);
        console.log(error.message);
      }
    }, []);*/

    return(
        <View style={styles.container}>
          <ScrollView>
            <View style={{display:'flex', flexDirection:'column', flexWrap:'wrap'}}>
            
            {/*
            data.map((achievement, index)=>(
                <TouchableOpacity key={index}
                style={{display:'flex', flexDirection:'row', flexWrap:'wrap', borderColor:'black', borderWidth:1, borderRadius:3, width:deviceWidth-12, margin:2, backgroundColor:'#e4f564'}}
                    onPress=
                            {() => props.navigation.navigate
                            ('Teljesítmény', {url: achievement.image_large, nev: achievement.title, description: achievement.description })}
                >

                <Image 
                    source={{uri: achievement.image_small}}
                    style={{height:deviceHeight/10, width:deviceWidth*0.20, borderRadius:10, margin:2}}
                />

                <Text style={{fontSize:14, fontWeight:'bold', color:'#35424a', width:deviceWidth/4}}>{achievement.title}</Text>

                <Text style={{fontSize:12, width:deviceWidth/2, textAlign:'left'}}>{achievement.description}</Text>
                
              </TouchableOpacity>  
             ))
                            */ }
           
            
            </View>
          </ScrollView>
        </View>
    )
}