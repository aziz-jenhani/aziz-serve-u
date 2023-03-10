import {createSlice}from '@reduxjs/toolkit'
const initialState ={
    isOpen:true,
    isSmallScreen:window.innerWidth < 768,
    
}
export const cartSlice =createSlice({
    name :'cart',
    initialState,
    reducers:{
        setIsOpen: (state)=>{
            state.isOpen = !state.isOpen;
        }
        
    }
})
export const {setIsOpen}=cartSlice.actions;

export default cartSlice.reducer;