"use client";

import React, { useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  MarkerClustererF,
  InfoWindowF,
} from "@react-google-maps/api";

const center = { lat: 19.11, lng: 72.84 };

const Maps = ({ analyticsData }) => {
  useEffect(() => {
    console.log("ad", analyticsData);
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCj84QwDPDua8y_xR4boyue0iTyBfWkKqU", // Replace with your Google Maps API key
    libraries: ["places"],
  });

  const [isOpen, setisOpen] = useState(null);

  if (isLoaded) {
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
                return analyticsData.data.map((data, idx) => {
                  // Convert latitude and longitude from strings to numbers
                  const latitude = parseFloat(data.latitude);
                  const longitude = parseFloat(data.longitude);

                  return (
                    <MarkerF
                      key={idx}
                      position={{ lat: latitude, lng: longitude }}
                      clusterer={clusterer}
                      onClick={() => setisOpen(idx)}
                    >
                      {isOpen === idx && (
                        <InfoWindowF onCloseClick={() => setisOpen(null)}>
                          <div className="w-48">
                            <div className="font-semibold my-2">Location</div>
                            <div className="my-2">City: {data.city}</div>
                            <div className="my-2">Country: {data.country}</div>
                            <div className="my-2 text-gray-500">
                              IP: {data.ip}
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
  } else {
    return <div>Loading...</div>;
  }
};

export default Maps;
