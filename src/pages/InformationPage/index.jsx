import { Button, Img } from "components";
import Footer from "components/Footer";
import Navigationbar from "components/Navigationbar";
import React, { useState } from 'react';
import { Radio, Result } from 'antd';
import { getAllQuiz } from "api/quiz";
import { useEffect } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { useNavigate } from "react-router-dom";


const InformationPage = () => {


  
    return (


        <>
          <Navigationbar fixed />
          <main className="navbar_color">
    
    
            <section className=" top-20 header relative pt-16 items-center flex h-full max-h-960-px">
    
            <div className="flex justify-center mt-10	" style={{ height: '500px', width: '100%' }}>
            
            Avaliable Course

</div>
            </section>
    
            <section className="top-14 pb-20 relative block bg-blueGray-800">
            <div className="flex justify-center mt-10	" style={{ height: '500px', width: '100%' }}>
            
            Visulization

</div>
        </section>

        <section className="top-14 pb-20 relative block bg-blueGray-800">
            <div className="flex justify-center mt-10	" style={{ height: '500px', width: '100%' }}>
            
            Where to report

</div>
        </section>


          
    
    
    
    
          </main>
          <Footer />
    
    
        </>
      );
    };

export default InformationPage;
