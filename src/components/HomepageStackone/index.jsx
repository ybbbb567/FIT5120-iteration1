import React from "react";

import { Img, Text } from "components";

const HomepageStackone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute backdrop-opacity-[0.5] bg-light_blue_50_7f blur-[35.00px] bottom-[0] h-[228px] left-[2%] rounded-[25px] w-[92%]"></div>
        <Img
          src="images/img_music.svg"
          className="absolute h-[36px] left-[4%] top-[7%] w-[auto]"
          alt="music"
        />
        <div
          className="absolute bg-cover bg-no-repeat flex h-[248px] inset-x-[0] items-start justify-end mx-[auto] p-[15px] top-[0] w-[100%]"
          style={{ backgroundImage: "url('images/img_group66.svg')" }}
        >
          <div className="flex flex-col md:gap-[40px] gap-[62px] justify-start md:ml-[0] ml-[2px] mt-[71px] md:w-[100%] w-[71%]">
            <Text
              className="font-normal font-spacegrotesk md:ml-[0] ml-[11px] not-italic text-gray_903 text-left"
              as="h3"
              variant="h3"
            >
              {props?.thiswebsiteis}
            </Text>
            <Img
              src="images/img_star.svg"
              className="h-[30px] w-[auto]"
              alt="star"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HomepageStackone.defaultProps = {
  thiswebsiteis: (
    <>
      This website is useful and real help me <br />
      to avoid the scam
    </>
  ),
};

export default HomepageStackone;
