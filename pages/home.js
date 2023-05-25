import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from '../App.style.js';


export const HomePage = ({ navigation }) => {
  return (
    
    <React.Fragment >
    <View style={styles.navcontainer}>
    
      <TouchableOpacity
        title="Map"
        style={styles.navigation}
        onPress={() =>
       navigation.navigate('MapScreen')
        }
      >
        <Text style={styles.navigation}>Térkép</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="EventScreen"
        style={styles.navigation}
        onPress={() =>
       navigation.navigate('EventScreen')
        }
      >
        <Text style={styles.navigation}>Esemény jelentkezés</Text>
      </TouchableOpacity>
    </View>
    </React.Fragment>
  );
};
