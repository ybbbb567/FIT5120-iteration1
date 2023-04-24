import React from "react";

import { Img } from "components";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";




const Navigationbar = (props) => {
  const navigate = useNavigate();

  return (
    <>

      <div className={props.className}>
        <div className="flex items-center justify-start mx-[auto] w-[100%]">
          <div className="navbar_color flex flex-row gap-40 items-center justify-start pr-10 sm:pr-20 md:pr-40 w-full max-w-screen-xl">
            <Img
              src={props?.picwishone}
              className="h-[145px] md:h-[auto] object-cover "
              alt="picwishOne"
            />
            <div className="flex items-center justify-start w-[auto]">
              <NavLink to="/" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} >Home</NavLink>
            </div>
            <div className="flex items-center justify-start w-[auto]">
              <NavLink to="/map" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} >Map</NavLink>
            </div>
            <div className="flex items-center justify-start w-[auto]">
              <NavLink to="/smsdetector" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} >SMS Detector</NavLink>
            </div>
            <div className="flex items-center justify-start w-[auto]">
              <NavLink to="/searchpage" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} ><nobr>URL Checker</nobr></NavLink>
            </div>
            <div className="flex items-center justify-start w-[auto]">
              <NavLink to="/quiz" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} >Quiz</NavLink>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

Navigationbar.defaultProps = {
  home: "Home",
  language: "Chinese",
  picwishone: "images/img_picwish2_125x227.png",
};

export default Navigationbar;
