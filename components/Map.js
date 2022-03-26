// import * as React from 'react';
import { useState } from 'react';
import Map,{Marker,Popup,PointLike} from 'react-map-gl';
import getCentre from 'geolib/es/getCenter'

const MapBox = ({searchResults}) => {

    // Transform the searchResults
    const coordinates = searchResults.map((result) =>({
        longitude:result.long,
        latitude:result.lat
    }))

    // Getting the centre coordinates
    const centre = getCentre(coordinates)

    const [viewPort,setViewPort] = useState({
        width:'100%',
        height:'100%',
        longitude: centre.latitude,
        latitude: centre.longitude,
        zoom: 5
    })

  return (
    <Map 
        mapStyle='mapbox://styles/addy-trunks/cl17tqucw004u15ljp3as6duj'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewPort}
        onMove={(nextView) => setViewPort(nextView.originalEvent)}
    >
    </Map>
  )
}

export default MapBox