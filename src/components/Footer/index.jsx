import { Button, Form, Input, Modal, Col, Row, Rate } from "antd";
import { useState } from "react";
import { Img } from "components";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { addFeedback } from "api/feedback";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" text-zinc-100	 flex flex-row gap-40 items-center justify-start pr-10 sm:pr-20 md:pr-40 w-full max-w-screen-xl">
       
       <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
            <Img
          src="images/img_picwish2_125x227.png"
          className="md:flex-1 h-[145px] sm:h-[auto] object-cover md:w-[100%] "
          alt="picwishTwo"
        />
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Main Features
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <NavLink 
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/searchpage"
                      >
                        URL Checker
                      </NavLink>
                    </li>
                    <li>
                    <NavLink 
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/smsdetector"
                      >
                        SMS Checker
                        </NavLink>

                    </li>
              
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Feature
                  </span>
                  <ul className="list-unstyled">
                    <li>
                    <NavLink 
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/map"
                      >
                        Map
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/quiz"
                      >
                      Quiz
                      </NavLink>
                    </li>
                    <li>
                    <NavLink 
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/information"
                      >
                      Information
                      </NavLink>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © 2023 by Guardian Team
             
                
              </div>
            </div>
          </div>
        </div>
   
      </footer>
    </>
  );
};
export default Footer;
