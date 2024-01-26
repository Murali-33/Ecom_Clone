import React from 'react';
import FooterMidList from './FooterMidList';
import { middleList } from '../../constants';
import {logo} from '../../assets/images/index';
import {flag } from '../../assets/images/index';


function FooterMiddle() {
  const scrollToTop = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className='w-full bg-amazon_light text-white'>
      <div className='w-full justify-center bg-gray-700 p-3 flex' onClick={scrollToTop}>
       <button className='flex'>Back to top</button>
      </div>
      {/* **************************Top start here************************ */}
      <div className='w-full border-b-[1px] border-gray-500 py-10'>
        <div className='max-w-5xl mx-auto text-gray-200'>
          <div className='w-full grid grid-cols-4 place-items-center items-start '>
          {middleList.map((item) => (
              <FooterMidList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* **************************Top end here************************** */}
      {/* **************************Bottom Start here********************* */}
      <div className='w-full flex gap-6 items-center justify-center py-6'>
        <div>
             <img className="w-20 pt-3" src={logo} alt="amazon logo" />
       </div>
       <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
          <img className="w-6" src={flag} alt="flagImg" />
          <p>India</p>
        </div>
      </div>
      {/* **************************Bottom end here*********************** */}
    </div>
  );
}

export default FooterMiddle;

