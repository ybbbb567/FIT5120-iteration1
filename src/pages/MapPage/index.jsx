import React from "react";
import Navigationbar from "components/Navigationbar";
import Footer from "components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const ResultPagePage = () => {

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
      Number of Fruad experieced:{state.fraud_value}
    </Popup>
  ));

  return (
    <>
      <div className="navbar_color  flex flex-col font-opensans items-center justify-start mx-[auto] w-[100%]">
        <Navigationbar
          className="flex items-center justify-center md:px-[20px] w-[100%]"
          home="Home"
          picwishone="images/img_picwish2_125x227.png"
        />
        <div
          className="font-pacifico md:h-[1125px] h-[1800px] max-w-[1660px] mt-[90px] mx-auto p-[129px] md:px-5 relative w-full">
          <div style={{ height: '500px', width: '100%' }}>
            <MapContainer center={[-25.2744, 133.7751]} zoom={4} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {state_data.map(state => (
                <Marker key={state.state} position={[state.lat, state.lng]}>
                  {popup_text.find(popup => popup.key === state.state)}
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
      <Footer
        className="flex flex-col font-spacegrotesk items-center justify-start mt-[171px] w-full"
        feedback="Feedback"
      />
    </>
  );
};

export default ResultPagePage;
