import React from "react";
import Navigationbar from "components/Navigationbar";
import Footer from "components/Footer";
import { Button, Text } from "components";
import { useNavigate } from 'react-router-dom';



const NotFound = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };
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
          <Text
            className="font-semibold md:ml-[0] ml-[312px] text-black_900 text-left tracking-[-0.72px] w-[auto]"
            as="h2"
            variant="h2"
          >
            We can't find this page
          </Text>
          <Text
            className="font-semibold md:ml-[0] ml-[312px] text-black_900 text-left tracking-[-0.72px] w-[auto]"
            as="h4"
            variant="h4"
          >
            This page may used to be here, but seems to have gone missing. We do apologise on it's behalf.
          </Text>
          <Button className=" bg-white rounded-full mx-auto border border-blue_500 border-solid cursor-pointer font-bold font-montserrat leading-[normal]  py-5  text-center text-black text-xl tracking-[-0.30px] w-1/6"
            onClick={handleButtonClick}>
            Home
          </Button>
        </div>
      </div>
      <Footer
        className="flex flex-col font-spacegrotesk items-center justify-start mt-[171px] w-full"
        feedback="Feedback"
      />
    </>
  );
};

export default NotFound;
