/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Img } from "components";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
// components


export default function Navbar (props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="navbar_color border-none top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <NavLink to="/" >
                <Img
                  src="images/Logo.png"
                  className="h-[42px] md:h-[auto] object-cover "
                  alt="picwishOne"

                />
              </NavLink>
            </div>
            <button
              className="cursor-pointer  text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-row	items-center lg:bg-opacity-0 lg:shadow-none " +
              (navbarOpen ? " block" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >

                  <NavLink to="/" style={({ isActive }) => ({
                    color: isActive ? '#94618E' : 'white', borderBottom: isActive ? '3px solid #F8EEE7' : '', fontSize: 20, fontWeight: 'bold'
                  })} >Home</NavLink>                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >

                  <NavLink to="/map" style={({ isActive }) => ({
                    color: isActive ? '#94618E' : 'white', borderBottom: isActive ? '3px solid #F8EEE7' : '', fontSize: 20, fontWeight: 'bold'
                  })} >Map</NavLink>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >

                  <NavLink to="/smsdetector" style={({ isActive }) => ({
                    color: isActive ? '#94618E' : 'white', borderBottom: isActive ? '3px solid #F8EEE7' : '', fontSize: 20, fontWeight: 'bold'
                  })} >Email Detector</NavLink>      </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >

                  <NavLink to="/searchpage" style={({ isActive }) => ({
                    color: isActive ? '#94618E' : 'white', borderBottom: isActive ? '3px solid #F8EEE7' : '', fontSize: 20, fontWeight: 'bold'
                  })} ><nobr>URL Checker</nobr></NavLink>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >

                  <NavLink to="/quiz" style={({ isActive }) => ({
                    color: isActive ? '#94618E' : 'white', borderBottom: isActive ? '3px solid #F8EEE7' : '', fontSize: 20, fontWeight: 'bold'
                  })} >Quiz</NavLink>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >

                  <NavLink to="/simulate" style={({ isActive }) => ({
                    color: isActive ? '#94618E' : 'white', borderBottom: isActive ? '3px solid #F8EEE7' : '', fontSize: 20, fontWeight: 'bold'
                  })} >Simulation</NavLink>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
