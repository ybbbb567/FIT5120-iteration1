import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  const state_data = [
    {
      state: "New South Wales",
      fraud_value: 480100,
      lat: -31.2532,
      lng: 146.9211
    },
    {
      state: "Victoria",
      fraud_value: 450000,
      lat: -36.9848,
      lng: 143.3906
    },
    {
      state: "Queensland",
      fraud_value: 363100,
      lat: -22.5752,
      lng: 144.0848
    },
    {
      state: "South Australia",
      fraud_value: 108800,
      lat: -30.0002,
      lng: 136.2092
    },
    {
      state: "Western Australia",
      fraud_value: 172800,
      lat: -27.6728,
      lng: 121.6283
    },
    {
      state: "Tasmania",
      fraud_value: 32400,
      lat: -42.0409,
      lng: 146.8087
    },
    {
      state: "Northern Territory",
      fraud_value: 10300,
      lat: -19.4914,
      lng: 132.5510
    },
    {
      state: "Australian Capital Territory",
      fraud_value: 30600,
      lat: -35.4735,
      lng: 149.0124
    }
  ];

  const popup_text = state_data.map(state => (
    <Popup key={state.state}>
      <b>{state.state}</b>
      <br />
      诈骗经验数：{state.fraud_value}
    </Popup>
  ));

  return (
    <MapContainer center={[-25.2744, 133.7751]} zoom={4}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {state_data.map(state => (
        <Marker key={state.state} position={[state.lat, state.lng]}>
          {popup_text.find(popup => popup.key === state.state)}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
