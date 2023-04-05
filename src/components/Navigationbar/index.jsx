import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const Navigationbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
    
      <div className={props.className}>
        <div className="flex items-center justify-start mx-[auto] w-[100%]">
          <div className="bg-black_900 flex flex-row gap-[400px] items-center justify-start pr-[1318px] sm:pr-[20px] md:pr-[40px] w-[100%]">
            <Img
              src={props?.picwishone}
              className="h-[145px] md:h-[auto] object-cover "
              alt="picwishOne"
            />
            <div className="flex items-center justify-start w-[auto]">
              <Text
                className="common-pointer font-opensans text-center text-white_A700  w-[auto]"
                as="h4"
                variant="h4"
                onClick={() => navigate("/")}
              >
                {props?.home}
              </Text>
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
