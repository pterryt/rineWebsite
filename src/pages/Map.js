import React, { useState, useEffect } from 'react';
import { MapContainer, ImageOverlay, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import HuntingAreasMarkers from '../components/HuntingAreasMarkers.js';
import TownsMarkers from '../components/TownsMarkers';
import HarborMarkers from '../components/HarborMarkers';
import './Map.css';

function Map() {
    const imageBounds = [
        [-90, -126], // bottom-left corner
        [90, 126]    // top-right corner
    ];

    const [markerData, setMarkerData] = useState({});

    useEffect(() => {
        fetch('/labels.json') // Adjust the path as needed
            .then(response => response.json())
            .then(data => setMarkerData(data))
            .catch(error => console.error('Error fetching marker data:', error));
    }, []);

    const [showHuntingAreas, setShowHuntingAreas] = useState(true);
    const [showTowns, setShowTowns] = useState(true);
    const [showHarbors, setShowHarbors] = useState(true);

    const navbarHeight = 45; // Example height, replace with actual nav bar height
    const availableHeight = window.innerHeight - navbarHeight;

    // Define custom div icon for text markers
    const textIcon = (name) => L.divIcon({ 
        html: `<div class="text-icon-container"><div class="text">${name}</div></div>`,
        className: 'text-icon'
    });

    // Function to round coordinates to the nearest tenth
    const roundToTenth = (num) => {
        return Math.round(num * 10) / 10;
    };

    // Custom event handler to print clicked coordinates rounded to nearest tenth
    function PrintCoordinates() {
        useMapEvents({
            click: (e) => {
                const roundedCoordinates = [roundToTenth(e.latlng.lat), roundToTenth(e.latlng.lng)];
                console.log('Clicked coordinates:', roundedCoordinates);
            },
        });
        return null;
    }

    return (
        <div style={{ height: `${availableHeight}px`, overflow: 'hidden' }}>
            <MapContainer
                center={[0, 0]}
                zoom={3}
                style={{ height: '100%', width: '100%', position: 'relative', background: 'transparent' }}
                scrollWheelZoom={'center'} // Enable smooth zooming from center
                maxBounds={imageBounds} // Restrict dragging within image bounds
                maxBoundsViscosity={1}  // Keep map within maxBounds when dragging ends
                minZoom={3} // Set minZoom to prevent zooming out past image bounds
                maxZoom={5} // Adjust maxZoom based on image size
                zoomSnap={0.01} // Set a small zoom snap value for smoother zooming
                zoomDelta={0.01} // Set a small zoom delta value for smoother zooming
                zoomAnimation={true}
                animateZoom={false} // Disable animation during zoom
                bounceAtZoomLimits={false} // Disable bouncing effect at zoom limits
                boundsOptions={{ maxZoom: 5, minZoom: 3 }} // Disable zoom level adjustment
                zoomControl={false} // Disable default zoom control
                attributionControl={false} // Disable default attribution control
            >
                <PrintCoordinates />
                <ImageOverlay
                    url="trimmed.png"
                    bounds={imageBounds}
                    noWrap={true}
                />
                {markerData && (
                    <>
                        {showHuntingAreas && <HuntingAreasMarkers markers={markerData.huntingAreas} icon={textIcon} />}
                        {showTowns && <TownsMarkers markers={markerData.towns} icon={textIcon} />}
                        {showHarbors && <HarborMarkers markers={markerData.harbors} icon={textIcon} />}
                    </>
                )}
            </MapContainer>
        </div>
    );
}

export default Map;
