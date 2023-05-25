import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './App.style.js';


import { HomePage } from './pages/home.js';
import { Map } from './pages/map.js';
import { EventRegistration } from './pages/event_registration.js';



function LogoTitle() {
  return (
    <View style={styles.wrapDots}>
    <Image
      style={{ width: 40, height: 40 }}
      source={require('./pictures/logo.png')}
    />
    <Text  style={{alignSelf:'center', padding:10, fontWeight:'bold', fontSize:16, color:'#003b4a'}}>HomePage</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const NavigationTheme = {
  dark: false,
  colors: {
    primary: '#ccc',
    background: '#ccc', // Not the actual background...
    card: '#ccc', // Background color of the header
    text: '#333',
    border: '#000',
    notification: '#000',
  },
};



const App = () => {

 

  

  return (

    

    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          //header: () => null,
          contentStyle: { backgroundColor: '#003b4a'}
        }}
      >
     
      <Stack.Screen
       
          name={'HomeScreen'}
          component={ HomePage }
          options={{
            
            headerTitle: ()=><LogoTitle/>,
            headerStyle:
            {
              backgroundColor:'#c4ce00',
            },
          }
         
          }
          style={styles.element}
          theme={NavigationTheme}
        />

      <Stack.Screen
          name="MapScreen"
          component={ Map }
          options={{
            title: 'Térkép',
            headerStyle:
            {
              backgroundColor:'#c4ce00',
            },
            headerTintColor: '#003b4a',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
          }}
          style={styles.element}
          theme={NavigationTheme}
        />

      <Stack.Screen
          name="EventScreen"
          component={ EventRegistration }
          options={{
            title: 'Események',
            headerStyle:
            {
              backgroundColor:'#c4ce00',
            },
            headerTintColor: '#003b4a',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        
      </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;