import React from "react";

const variantClasses = {
  h1: "sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "font-bold sm:text-[30px] md:text-[32px] text-[34px]",
  h3: "sm:text-[24px] md:text-[26px] text-[28px]",
  h4: "sm:text-[22px] md:text-[24px] text-[26px]",
  h5: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  h6: "sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "font-normal text-[18px]",
  body2: "font-normal text-[16px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
