import React from "react";
import { Rate } from 'antd';
import { Img, Text } from "components";

const HomepageStackone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute backdrop-opacity-[0.5]  bottom-[0] h-[228px] left-[2%] rounded-[25px] w-[92%]"></div>
        <Img
          src="images/img_music.svg"
          className="absolute h-[36px] left-[4%] top-[7%] w-[auto]"
          alt="music"
        />
        <div
          className="absolute bg-no-repeat gallery h-[248px] inset-x-[0] items-start mx-[auto] p-[15px] top-[0] w-[100%]"
          style={{ backgroundImage: "url('images/img_group157.svg')" }}
        >
          <div className="gallery  flex-col  md:gap-[40px] gap-[62px] justify-start md:ml-[0] ml-[2px] mt-[71px] md:w-[100%] w-[71%]">
            <Text 
              className="font-normal font-rubik  max-w-[426px] md:max-w-full not-italic text-gray_500 text-left tracking-[-0.50px]"
              as="h6"
              variant="h6"
              style= {{wordWrap: 'break-word'}}
            >
              {props?.thiswebsiteis}
            </Text>
            
            <Rate disabled defaultValue={props?.rates} />
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
