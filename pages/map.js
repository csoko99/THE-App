import React, { useState, useEffect } from 'react';
import MapView, {Marker} from 'react-native-maps';



export const Map = (props) => {

    const [data, setData] = useState([]);

   /* useEffect(() => {
      try {
        fetch('https://theapp.artidas.hu/tavernraid/mobile/tavern/list')
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
    }, []);
*/

        return(
            
                <MapView
                   
                    initialRegion={{
                        latitude: 48.32129837871095,
                        longitude: 21.566685696402285,
                        latitudeDelta: 0.001119879263429,
                        longitudeDelta: 0.0022812748693095,

                    }}
                    style={{absolute: true, width: '100%', height: '100%'}}
                >

                    {/*
                        data.map((tavern, index)=>(
                            <Marker
                                key={index}
                                coordinate = {{latitude: parseFloat(tavern.address_latitude), longitude: parseFloat(tavern.address_longitude)}}
                                pinColor = {"blue"}
                                title={tavern.display_name}
                                description={tavern.address_city+ ' '+tavern.address_postal_code + ' '+ tavern.address_street_name + ' '+tavern.address_street_numberr }
                            />
                        ))*/
                    }
                    

                </MapView>
        );
    
}