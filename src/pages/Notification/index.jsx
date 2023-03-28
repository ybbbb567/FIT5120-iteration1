import React from "react";

import { Text } from "components";

const NotificationPage = () => {
  return (
    <>
      <div className="bg-bluegray_100_a2 flex font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <div
          className="bg-cover bg-no-repeat flex h-[1491px] items-end justify-start p-[270px] sm:px-[20px] md:px-[40px] w-[100%]"
          style={{ backgroundImage: "url('images/img_group63.png')" }}
        >
          <Text
            className="font-bold mb-[460px] mt-[430px] text-deep_orange_A700 text-left tracking-[-0.72px] w-[auto]"
            as="h1"
            variant="h1"
          >
            This website is unsafe. Are you sure you want access it ?
          </Text>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
