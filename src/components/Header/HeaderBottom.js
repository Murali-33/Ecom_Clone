import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from "framer-motion";


function HeaderBottom() {
  const [sideNavbar,setSideNavbar] = useState(false);
  const ref = useRef();
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(e.target.contains(ref.current)){
        setSideNavbar(false);
      }
    })
  },[ref,sideNavbar])
 
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
      {/* ===============ListItems start here================= */}
      <div>
        <ul className='flex items-center gap-6 text-sm tracking-wide sticky'>
          <li onClick={()=>setSideNavbar(true)}><MenuIcon/></li>
          <li>All</li>
          <li className='hidden md:inline-flex'>Today's Deals</li>
          <li className='hidden md:inline-flex'>Amazon miniTV</li>
          <li className='hidden md:inline-flex'>Mobiles</li>
          <li className='hidden md:inline-flex'>Gifts Cards</li>
          <li>Sell</li>
          <li>Fashion</li>
          <li className='hidden md:inline-flex'>Coupons</li>
        </ul>
      </div>
      {/* ===============ListItems end here=================== */}
      {/* ===============SideNav Start Here=================== */}
      {
        sideNavbar && (
          <div className='w-full h-screen fixed text-black top-0 left-0 bg-amazon_blue bg-opacity-60'>
          <div className='w-full h-screen relative'>
            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duraction:0.5}} className="w-[350px] h-full bg-white border border-black">
             <div className='w-full bg-amazon_light text-white py-2 flex items-center gap-4'>
             <AccountCircleIcon/>
              <h3 className='font-titleFont text-lg font-bold tracking-wide'>Hello, Sign In</h3>
             </div>
            <SideNavContent
            title="Trending"
            Text1="Best Sellers"
            Text2="New Releses"
            Text3="Movers And Shakers"
            />
            <SideNavContent
            title="Digital Contents And devices"
            Text1="Fire Tv"
            Text2="Amazon Prime Video"
            Text3="Amazon Prime Music"
            />
            <SideNavContent
            title="Shop By Department"
            Text1="Electronics"
            Text2="Computers"
            Text3="Smart Phone"
            />
            <SideNavContent
            title="Programs & Features"
            Text1="Amazon Pay"
            Text2="Amazon Launchpad"
            Text3="Mobile Recharges"
            />
             <SideNavContent
            title="Help & Settings"
            Text1="Your Account"
            Text2="Customer Service"
            Text3="Sign In"
            />
             <span onClick={()=>setSideNavbar(false)} className='absolute cursor-pointer top-0 left-[300px] w-10 h-10 text-black flex items-center justify-center hover:border hover:bg-zinc-500 hover:text-white duration-300'><CloseIcon/></span>
            </motion.div>
           
          </div>
          </div>
        )
      }
      {/* ===============SideNav end here===================== */}
    </div>
  )
}

export default HeaderBottom
