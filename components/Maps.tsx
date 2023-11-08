import React, { useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  MarkerClustererF,
  InfoWindowF,
} from "@react-google-maps/api";

const center = { lat: 19.11, lng: 72.84 };

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCj84QwDPDua8y_xR4boyue0iTyBfWkKqU",
    libraries: ["places"],
  });

  const [isOpen, setisOpen] = useState(false);

  const locations = [
    {
      name: "Jaipur",
      geometry: { location: { lat: 26.907524, lng: 75.739639 } },
    },
    {
      name: "Lucknow",
      geometry: { location: { lat: 26.85, lng: 80.949997 } },
    },
    {
      name: "Mumbai",
      geometry: { location: { lat: 19.07609, lng: 72.877426 } },
    },
    {
      name: "Andheri",
      geometry: { location: { lat: 19.119698, lng: 72.84641 } },
    },
    {
      name: "Juhu",
      geometry: { location: { lat: 19.107421, lng: 72.827903 } },
    },
    {
      name: "Delhi",
      geometry: { location: { lat: 28.70406, lng: 77.102493 } },
    },
  ];

  if (isLoaded)
    return (
      <div className="h-[86.2vh] w-full">
        <div className="bg-slate-500 h-full w-full">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            <MarkerClustererF>
              {(clusterer) => {
                return locations.map((location, idx) => {
                  return (
                    <MarkerF
                      key={idx}
                      position={location.geometry.location}
                      clusterer={clusterer}
                      onClick={() => setisOpen(idx)}
                    >
                      {isOpen === idx && (
                        <InfoWindowF onCloseClick={() => setisOpen(null)}>
                          <div className="w-48">
                            <div className="font-semibold my-2">
                              {location.name}
                            </div>
                            <div className="my-2">{location.vicinity}</div>
                            <div className="my-2 text-gray-500">
                              Rating: {location.rating}/5
                            </div>
                          </div>
                        </InfoWindowF>
                      )}
                    </MarkerF>
                  );
                });
              }}
            </MarkerClustererF>
          </GoogleMap>
        </div>
      </div>
    );
};

export default Maps;
