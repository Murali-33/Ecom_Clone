import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../FeactureSlices/amazonSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  deleteToCart,
  clearCart,
  incrQuantity,
  decrQuantity,
} from "../FeactureSlices/amazonSlice";
import { emptyCart } from "../../assets/images/index";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Cart() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let Total = 0;
    products.map(
      (item) => {
        Total += item.price * item.quantity;
        return setTotalPrice(Total.toFixed(2));
      },
      [products]
    );
  });
  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className=" font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-xl font-medium">Shopping Cart</h2>
              <h4 className="text-xl font-medium">Subtitle</h4>
            </div>
            {/* products start here */}
            <div>
              {products.map((items) => (
                <div
                  key={items.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
                >
                  <div className="w-1/5">
                    <img
                      className="w-full h-44 object-contain"
                      src={items.image}
                      alt="productImg"
                    />
                  </div>
                  <div className="w-4/5">
                    <h2 className="font-semibold text-lg">{items.title}</h2>
                    <p className="pr-10 text-sm">
                      {items.description.substring(0, 200)}...
                    </p>
                    <p className="text-base">
                      Unit Price{" "}
                      <span className="font-semibold">${items.price}</span>
                    </p>
                    <div className=" bg-blue-50 flex justify-center items-center rounded-md drop-shadow-lg py-1 text-center gap-1 w-24">
                      <p>Qty:</p>
                      <p onClick={() => dispatch(incrQuantity(items.id))}>-</p>
                      <p>{items.quantity}</p>
                      <p onClick={() => dispatch(decrQuantity(items.id))}>+</p>
                    </div>
                    <button
                      onClick={() => dispatch(deleteToCart(items.id))}
                      className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-700 duraction-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  <div>
                    <p className="text-lg font-titleFont font-semibold">
                      ${Number(items.price * items.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="py-4 w-full">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-700 duraction-300"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            {/* products End here */}
          </div>
          <div className="w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4">
            <div>
              <p className="gap-2 flex items-start text-sm">
                <span>
                  <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
                </span>
                your order is qualify for the FREE shipping choose this option
                at checkout . see detail...
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center gap-2 justify-between">
                Total:<span className="text-lg font-bold">${totalPrice}</span>
              </p>
            </div>
            <button className="w-40 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-600 duration-200 py-1.5 rounded-md mt-3 text-center">
              Proceed to pay
            </button>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center items-center gap-4 py-10"
          >
            <div className="flex items-center justify-center">
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src={emptyCart}
                alt="emptyCartImg"
              />
            </div>
            <Link to="/">
              <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
                <h1 className="font-titleFont font-bold text-xl">
                  Your Cart feels lonley.
                </h1>
                <p className="text-sm text-center">
                  your shopping cart lives serve.Give it purpose - fill it with
                  books,electronic ,videos ,etc.. and make it happy
                </p>
                <button className="w-44 mt-4 bg-yellow-400 rounded-md cursor-pointer py-1.5 hover:bg-yellow-500 active:bg-yellow-700">
                  Continue shopping
                </button>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default Cart;
