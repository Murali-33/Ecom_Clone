import axios from 'axios'
import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useDispatch } from 'react-redux';
import {addToCart} from '../FeactureSlices/amazonSlice';

function Product({ searchValue }) {
  const dispatch = useDispatch();
  const [Products , setproducts] = useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapiserver.vercel.app/amazonproducts")
    .then(res =>{
      setproducts(res.data)
    })
   
  },[])

  const filteredProducts = searchValue
  ? Products.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  : Products;


  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10 px-4 bg-gray-100'>
      {
        filteredProducts.map((item)=>{
          return(
            <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none duration-200 flex flex-col gap-4 relative'>
              <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>{item.category}</span>
            <div>
              <div className='w-full h-auto flex items-center justify-center relative group'>
              <img className='w-52 h-40 object-contain' src={item.image} alt="product img" />
              <ul className='w-full h-35 bg-gray-100 absolute bottom-[-157px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duraction-700'>
                <li className='productLi'>View Details
                  <span>
                    <ArrowCircleRightIcon></ArrowCircleRightIcon>
                  </span>
                </li>
                <li className='productLi'>Add to watchlist
                <span>
                    <FavoriteIcon></FavoriteIcon>
                </span>
                </li>
              </ul>
              </div>
            </div>
            <div className='px-4 z-10 bg-white'>
            <div className='flex items-center justify-between'>
              <h2 className='font-titleFont tracking-wide text-lg text-amazon_blue font-sm'>{item.title.substring(0,20)}</h2>
              <p className='text-sm text-gray-600 font-semibold'>${item.price}
              </p>
            </div>
            <div>
              <p className='text-sm'>{item.description.substring(0,100)}...</p>
              <div className='text-yellow-500'>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/>
            </div>
            </div>
            <div className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-600 duration-200 py-1.5 rounded-md mt-3 text-center'>
              <button onClick={()=>dispatch(addToCart({id:item.id,title:item.title,description:item.description,price:item.price,image:item.image,quantity:1,}))}>Add to Cart</button>
            </div>
            </div>
          
            </div>
          ) 
        })
      }
    </div>
  )
}

export default Product

