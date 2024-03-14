import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name:'cart',
initialState:[],
reducers:{
    addtoCart :(state,action)=>{
        const exsitingProduct = state.find(item=>item.id==action.payload.id)
        if(exsitingProduct){
const remainingproducts=state.filter(item=>item.id!=exsitingProduct.id)
exsitingProduct.quantity++
exsitingProduct.totalPrice=exsitingProduct.quantity*exsitingProduct.price
state=[...remainingproducts,exsitingProduct]
        }else{
state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
        }
    },removeCartItem:(state,action)=>{
        return state.filter(item=>item.id!=action.payload)
    },
    incQuantity :(state,action)=>{
        const exsitingProduct = state.find(item=>item.id==action.payload)
        exsitingProduct.quantity++
        exsitingProduct.totalPrice=exsitingProduct.quantity*exsitingProduct.price
const remainingproducts = state.filter(item=>item.id!=exsitingProduct.id)
state=[...remainingproducts,exsitingProduct]

    },
    decQuantity :(state,action)=>{
        const exsitingProduct = state.find(item=>item.id==action.payload)
        exsitingProduct.quantity--
        exsitingProduct.totalPrice=exsitingProduct.quantity*exsitingProduct.Price
const remainingproducts = state.filter(item=>item.id!=exsitingProduct.id)
state=[...remainingproducts,exsitingProduct]

    },
    emptyCart:(state,action)=>{
        return state =[]
    }
}
})
export const {addtoCart,removeCartItem,incQuantity,decQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer