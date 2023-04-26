import React from "react";

import { Img } from "components";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
} from "@material-tailwind/react";



export default function Navigationbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
   <NavLink to="/" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} >Home</NavLink>

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        

              <NavLink to="/map" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} >Map</NavLink>

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <NavLink to="/smsdetector" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} >SMS Detector</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
     

     <NavLink to="/searchpage" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} ><nobr>URL Checker</nobr></NavLink>

      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
     

     <NavLink to="/quiz" style={({ isActive }) => ({
                color: isActive ? '#f15f79' : 'white', borderBottom: isActive ? '3px solid #f15f79' : '', fontSize: 20, fontWeight: 'bold'
              })} >Quiz</NavLink>

      </Typography>

    

    </ul>
  );
 
  return (
    <>
      <Navbar className="border-none	sticky inset-0 z-10 h-max max-w-full navbar_color rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
         <Img
              src="images/Logo.png"
              className="h-[42px] md:h-[auto] object-cover "
              alt="picwishOne"
            />         </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
       
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
    
      
    </>
  );


    
  
};


