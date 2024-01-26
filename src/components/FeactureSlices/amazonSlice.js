import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  products:[],
  usersInfo:[],
}

const amazonSlice = createSlice({
  name:'amazon',
   initialState,
   reducers:{
      addToCart:(state,action)=>{
        const item = state.products.find((item)=> item.id === action.payload.id)
        if(item){
          item.quantity += action.payload.quantity
        }else{
          state.products.push(action.payload)
        }
      },
      incrQuantity :(state ,action)=>{
        const item = state.products.find((item)=> item.id === action.payload)
          item.quantity++;
      },
      decrQuantity: (state, action) => {
        const item = state.products.find((item) => item.id === action.payload);
      
        if (item && item.quantity > 1) {
          item.quantity--;
        }
      },
      deleteToCart:(state,action)=>{
         state.products= state.products.filter((items)=> items.id !== action.payload);
      },
      clearCart:(state)=>{
        state.products =[]
      }
    }

   })
 
export const selectAllProducts =(state)=> state.amazon.products;
export const {addToCart,deleteToCart,clearCart,incrQuantity,decrQuantity} = amazonSlice.actions;
export default amazonSlice.reducer;