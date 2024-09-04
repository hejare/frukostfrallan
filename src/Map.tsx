// src/Map.tsx
import React, { useEffect, useRef } from 'react';

interface Place {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  specialty: string;
  totalScore: number;
  price: number;
  breadScore: number;
  condimentScore: number;
  size: number;
  environment: number;
}

interface MapProps {
  places: Place[];
}

const Map: React.FC<MapProps> = ({ places }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Load the Google Maps script
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    googleMapsScript.async = true;
    document.head.appendChild(googleMapsScript);

    googleMapsScript.onload = () => {
        const mapStyles: google.maps.MapTypeStyle[] = [
            {
                featureType: 'poi',
                elementType: 'all',
                stylers: [{ visibility: 'off' }],
            },
        ];

      // Initialize the map
      const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
        center: { lat: 59.3366981, lng: 18.0586932 }, // Default to San Francisco
        zoom: 16,
        styles: mapStyles,
      });

      // Create an info window instance
      const infoWindow = new google.maps.InfoWindow();

      // Add markers for each place
      places.forEach((place) => {
        const marker = new google.maps.Marker({
          position: { lat: place.latitude, lng: place.longitude },
          map: map,
          title: place.name,
          label: {
            text: place.name + ' - ' + place.price + 'kr',
            color: '#000', // Text color
            fontSize: '14px', // Font size
            fontWeight: 'bold', // Font weight
          }
        });

        // Add a click listener to each marker to display an info window
        marker.addListener('mouseover', () => {
          // Set the content of the info window
          infoWindow.setContent(`
            <div>
              <h2>${place.name}</h2>
              <p class="bold">${place.totalScore}/10 - ${place.price}kr</p>
              <p class="bold mb">${place.specialty}</p>
              <p>Bröd: ${place.breadScore}/10</p>
              <p>Pålägg: ${place.condimentScore}/10</p>
              <p>Storlek: ${place.size}/10</p>
              <p>Miljö: ${place.environment}/10</p>

            </div>
          `);
          // Open the info window on the marker
          infoWindow.open(map, marker);
        });

        // Add a click listener to each marker to display an info window
        marker.addListener('mouseout', () => {
            // Close the info window on the marker
            infoWindow.close();
        });
      });
    };

    return () => {
      // Clean up the script
      document.head.removeChild(googleMapsScript);
    };
  }, [places]);

  return <div ref={mapRef} style={{ width: '80vw', height: '80vh' }} />;
};

export default Map;
