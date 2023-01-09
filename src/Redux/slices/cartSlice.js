import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list:[],
    totalPrice:0

}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        setList(state,action){
           const findList = state.list.find((obj) => obj.id === action.payload.id)
           if(findList){
            findList.count++
           }else{
            state.list.push({...action.payload,count:1})
           }
            state.totalPrice = state.list.reduce((sum,el) => sum + el.price * el.count,0);
        },
        setRemove(state,action){
            state.list = state.list.filter(el => el.id  !== action.payload);
            state.totalPrice = state.list.reduce((sum,el) => sum + el.price * el.count,0);
        },
        plusList(state, action) {
            const plus = state.list.find((item) => item.id === action.payload);
            if (plus) {
              plus.count++;
              state.totalPrice = state.list.reduce(
                (sum, item) => sum + item.price * item.count,
                0
              );
            }
          },
          minusList(state, action) {
            const plus = state.list.find((item) => item.id === action.payload);
            if (plus) {
              plus.count--;
              state.totalPrice = state.list.reduce(
                (sum, item) => sum + item.price * item.count,
                0
              );
            }
          },
        
}
})



export const {setCount,setList,setRemove,plusList,minusList} = cartSlice.actions

export default cartSlice.reducer