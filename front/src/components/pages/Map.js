import { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import io from 'socket.io-client';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from '../Navbar';
import MarkerIcon from '../MarkerIcon';
import mapboxgl from 'mapbox-gl';
import { v4 as uuidv4 } from 'uuid';

let socket;

mapboxgl.setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  null,
  true 
);

const Map = () => {
    const [userCoords, setUserCoords] = useState({
      latitude: null,
      longitude: null
    });

    const [nearestTaxis, setNearestTaxis] = useState([]);
    
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "calc(100vh - 65px)",
        latitude: null,
        longitude: null,
        zoom: 13
    });

    const ENDPOINT = 'http://localhost:4000';

    const getUserCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setViewport({
          ...viewport,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setUserCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })

      });
    }

    useEffect(() => {
      getUserCurrentLocation();
      socket = io(ENDPOINT);
      console.log(userCoords)
      socket.emit('nearest taxis', userCoords, ({ nearestTaxisToUser }) => {
        setNearestTaxis(nearestTaxisToUser);
        console.log(nearestTaxis);
      });

    }, [userCoords.latitude, userCoords.longitude]);

    return (
      <>
        <Navbar />
        {
          viewport.latitude && viewport.longitude ?
            <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1IjoibWVoZGk3NyIsImEiOiJja2R4bWtpYmIzM3N1MnRwYWUxZjlldnNxIn0.0wiRF9B_wuv8hzM5uvAqow"
                mapStyle= 'mapbox://styles/mapbox/streets-v11'
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
              {
                userCoords.latitude && userCoords.longitude ?

                <Marker latitude={ userCoords.latitude } longitude= { userCoords.longitude }> 
                    <button>
                        <MarkerIcon fill="red" />
                    </button>
                </Marker> 

                : null
              }

              {
                nearestTaxis ?
                  nearestTaxis.map(taxi => (
                    <Marker latitude={ taxi.latitude } longitude= { taxi.longitude } key={uuidv4()}> 
                      <button className="taxi-marker">
                          <MarkerIcon fill="yellow" />
                      </button>
                      <div className="taxi-info">
                        <h2>Foulen El Fouleni</h2>
                        <p>Phone: 123456789</p>
                      </div>
                    </Marker> 
                    
                  )) : null
              }
            </ReactMapGL> 
            
            : 
            
            <h1 className="">
              Please allow our App to access your location in order to see the map!
            </h1>
        }
      </>
    );
};

export default Map;
