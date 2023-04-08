import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";




const Navigationbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start mx-auto w-full max-w-7xl">
          <div className="navbar_color flex flex-row gap-8 items-center justify-start pr-12 sm:pr-20 md:pr-24 w-full">
            <Img
              src={props?.picwishone}
              className="h-16 md:h-20 object-contain"
              alt="picwishOne"
            />
            <div className="flex items-center justify-start flex-1">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#f15f79" : "white",
                  borderBottom: isActive ? "3px solid #f15f79" : "",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                })}
              >
                Home
              </NavLink>
            </div>
            <div className="flex items-center justify-start flex-1">
              <NavLink
                to="/searchpage"
                style={({ isActive }) => ({
                  color: isActive ? "#f15f79" : "white",
                  borderBottom: isActive ? "3px solid #f15f79" : "",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                })}
              >
                <nobr>URL Checker</nobr>
              </NavLink>
            </div>
            <div className="flex items-center justify-start flex-1">
              <NavLink
                to="/quiz"
                style={({ isActive }) => ({
                  color: isActive ? "#f15f79" : "white",
                  borderBottom: isActive ? "3px solid #f15f79" : "",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                })}
              >
                Quiz
              </NavLink>
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
