// TownsMarkers.js
import React from 'react';
import { Marker, Popup } from 'react-leaflet';

function TownsMarkers({ markers, icon }) {
    return (
        <>
            {markers && markers.map((marker, index) => (
                <Marker key={index} position={marker.coordinates} icon={icon(marker.name)}>
                    <Popup>{marker.name}</Popup>
                </Marker>
            ))}
        </>
    );
}

export default TownsMarkers;