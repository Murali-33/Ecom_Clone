import React, { useState } from "react";
import { logo } from "../../assets/images/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { allItems } from "../../constants";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HeaderBottom from "./HeaderBottom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {selectAllProducts,selectAllUsers,userSignout} from "../FeactureSlices/amazonSlice";
import { useEffect } from "react";
import axios from "axios";
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth, signOut } from "firebase/auth";
// import PersonIcon from '@mui/icons-material/Person';

function Header({ onSearch }) {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [userCity, setUserCity] = useState("");
  const products = useSelector(selectAllProducts);
  const user = useSelector(selectAllUsers);
  const [searchProduct, setSearchProduct] = useState("");


  //logout functionality
  const handleLogout =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(userSignout())
      alert('Sign-out successful');
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

  //location
  const handleLocation = () => {
    window.confirm(`Current Location🌍: ${userCity}`);
  }
  
  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            // Use latitude and longitude to get the user's city
            try {
              const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?key=530feddaee3c428ba4c42e9aa669811a&q=${latitude}+${longitude}`
              );

              const city =
                response.data.results[0]?.components.city ||
                response.data.results[0]?.components.county ||
                response.data.results[0]?.components.state ||
                "Unknown City";

              setUserCity(city);
            } catch (error) {
              console.error("Error fetching user city:", error);
            }
          },
          (error) => {
            console.error("Error fetching user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchUserLocation();
  }, []);

  const handleSearchClick = () => {
    // onSearch(searchProduct);
    alert("Search is not available, working in progress!!😉")
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_dark text-white px-4 py-3 flex gap-4 items-center">
        {/* ****************************Image Start here********************************* */}
        <div className="headerHover">
          <Link to="/">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </Link>
        </div>
        {/* ****************************Image End here********************************* */}
        {/* ****************************Deliver Start here********************************* */}
        <div onClick={handleLocation} className=" items-center hidden mdl:inline-flex headerHover">
          <LocationOnIcon />
          <div className="ml-1">
            <p className="text-sm text-light_text font-light">Deliver to</p>
            <p className="text-sm font-semibold text-white">{userCity}</p>
          </div>
        </div>

        {/* ****************************Deliver End here********************************* */}
        {/* ****************************Search Start here********************************* */}
        <div className="h-10 rounded-md hidden lgl:flex flex-grow relative">
          <span
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 flex border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownIcon />
          </span>
          <input
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            placeholder="Search Amazon.in"
            className="h-full text-base  text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span
            onClick={handleSearchClick}
            className="w-12 h-full flex bg-amazon_yellow items-center justify-center text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md hover:bg-[#f3a847] duration-300"
          >
            <SearchIcon />
          </span>
          {showDropdown && (
            <div>
              <ul className="absolute w-50 h-60 top-10 left-4 overflow-y-scroll overflow-x-hidden bg-white border-[1px] text-black p-2  flex-col gap-1 z-50">
                {allItems.map((item) => {
                  return (
                    <li
                      className="text-sm font-titleFont cursor-pointer duration-300 tracking-wide hover:bg-blue-500"
                      key={item.id}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        {/* ****************************Search End here********************************* */}
        {/* ****************************laungauge Start here********************************* */}
        <div className="flex items-center headerHover">
          <p className="text-sm font-semibold  text-white mr-1 hidden mdl:inline-flex">
            EN
          </p>
          <span className="hidden mdl:inline-flex">
            <ArrowDropDownIcon />
          </span>
        </div>

        {/* ****************************laungauge End here********************************* */}
        {/* ****************************Signin Start here********************************* */}
        {/* //<span className="md:inline-flex lg:hidden"><PersonIcon/></span> */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            {
              user ? (<p className="text-sm text-gray-100 font-medium justify-center">{user.userName}</p> )
              :(<p className="text-xs text-light_text font-bold">Hello, sign in</p>)
            }
            <p className="text-sm font-semibold -mt-1 text-white hidden mdl:inline-flex">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* ****************************Signin End here********************************* */}
        {/* ****************************Orders Start here********************************* */}
        <div className="flex flex-col items-start justify-center hidden mdl:inline-flex headerHover">
          <p className="text-xs text-light_text font-bold">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-white">& Orders</p>
        </div>
        {/* ****************************Orders End here********************************* */}
        {/* ****************************Cart Start here********************************* */}
        <Link to="/cart">
          <div className="flex items-center headerHover">
            <ShoppingBasketIcon />
            <p className="ml-1">{products.length > 0 ? products.length : 0}</p>
          </div>
        </Link>
         {
          user && (
            <div onClick={handleLogout} className="flex flex-col justify-center items-center headerHover relative">
              <LogoutIcon/>
              <p className=" mdl:inline-flex text-xs font-semibold text-white">Logout</p>
            </div>
          )
         }
        {/* ****************************Cart End here********************************* */}
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
