import { GetPostComment } from "@/app/album/api";
import { AppDispatch } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByNum: (state, action) => {
            state.value += action?.payload;
        },
        
    }

})

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

const fetchPostComment = async () => {
    return await GetPostComment();
    
}
export const incrementAsync =  (amount: number) => async(dispatch: AppDispatch) => {
    // set some other logic , lets make an api call here
   const findResult = await fetchPostComment();
   console.log(findResult);
   setTimeout( () => {
    dispatch(incrementByNum(amount))
   }, 2000)
    
}

export const {increment, decrement, incrementByNum, } = counterSlice.actions;


//create a useSelector
//// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state:any) => state.counter.value;

export default counterSlice.reducer;