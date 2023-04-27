import React, { useEffect } from "react";
import { useState } from "react";
import { getFeedback } from "api/feedback";
import { Text, Button, Img, Line } from "components";
import HomepageStackone from "components/HomepageStackone";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";


<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>;

const HomepagePage = () => {
  const navigate = useNavigate();




  return (


    <>
   <Navigationbar fixed/>
<main className="navbar_color">


<section className=" top-20 header relative pt-16 items-center flex h-full max-h-960-px">
        
<div className="z-10 container relative mx-auto">
            <div className=" items-center flex flex-wrap">
              <div className=" w-full lg:w-11/12 px-6 ml-auto mr-auto text-center">
                <div className="pr-10">
                  <h3 className="text-white font-semibold text-3xl">
              Let's check the security of the website you will browse <br></br>
              </h3>
              <p className="mt-4  text-base leading-relaxed text-white">
              <br></br>
              The internet makes it easy for scammers to trick 
              people into <br></br>
              giving away their money and personal information
              </p>
              <div className="mt-10">
              <Button
                    className="common-pointer bg-bluegray_700 border-[1px] bg-purple border-solid cursor-pointer font-bold font-montserrat leading-[normal] sm:min-w-[100%] min-w-[548px] md:ml-[0] ml-[32px] mt-[80px] py-[28px] rounded-[6px] text-[20px] text-center text-white_A700 tracking-[-0.30px] w-[auto]"
                    onClick={() => navigate("/searchpage")}
                  >
                    Start Check Website
                  </Button>
              </div>
            </div>
          </div>
        </div>
</div>

          <div
            className="absolute top-0 w-full height-120 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('images/img_asdadwadzscmod.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="h-full w-full  absolute opacity-75 bg-black"
            ></span>
          </div>

   </section>
          
      
     
          

            <section className="top-14 pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
          
         
          </div>

          <div className="justify-around container mx-auto px-4 lg:pt-24 ">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">

              </div>
            </div>
            <div className=" flex flex-wrap mt-12 justify-around">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i class="fas fa-credit-card fa-beat fa-lg"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Card Fraud
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                In 2021-2022, 11.5% of people between 15-24 years experienced card fraud, 
                and that is higher than any other age group.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-user-secret fa-lg"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Identity Theft
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                18600 people between 15-24 years experienced identity theft in 2021-2022.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i class="fas fa-regular fa-globe fa-lg style="color="#8a0ec4"></i>
                                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Online impersonation
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                18% of people between 15-24 years experienced online impersonation in 2021-2022, which is higher than other age groups in 2021-2022
                </p>
              </div>
            </div>
          </div>
        </section>


            <section className="relative py-20">
         

          <div className="container mx-auto px-4">
            <div className="items-center flex ">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Img
                src="images/img_quiz.png"
                className="md:flex-1 h-[663px] sm:h-auto object-cover w-auto md:w-full"
                alt="quiz"
              />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
             
                  <h3 className="text-3xl font-semibold"> Some Questions to challenge your knowledge
</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Here&#39;s a simple test of your knowledge of phishing
                      scams, and online shopping fraud. Take this quiz to find
                      out how to protect yourself from internet fraud.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                      <Button className="bg-purple border  border-solid cursor-pointer font-bold font-montserrat leading-[normal] min-w-[548px] sm:min-w-full py-7 rounded-md text-center text-white_A700 text-xl tracking-[-0.30px] w-auto"
                    onClick={() => navigate("/quiz")}>
                    Start the Quiz


                  </Button>
                        </div>
                        
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
        </section>



     
      </main>
      <Footer/>


    </>
  );
};

export default HomepagePage;
