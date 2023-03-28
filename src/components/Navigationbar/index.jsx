import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const Navigationbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start mx-[auto] w-[100%]">
          <div className="bg-black_900_e5 flex flex-row gap-[14px] items-center justify-start pr-[1318px] sm:pr-[20px] md:pr-[40px] w-[100%]">
            <Img
              src={props?.picwishone}
              className="h-[121px] md:h-[auto] object-cover w-[64%]"
              alt="picwishOne"
            />
            <div className="flex items-center justify-start w-[auto]">
              <Text
                className="common-pointer font-opensans text-center text-white_A700 tracking-[-0.60px] w-[auto]"
                as="h2"
                variant="h2"
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
