import { createSlice } from "@reduxjs/toolkit";
const initialValue={
    name:"User",
    email:""
}

const UserSlice= createSlice({
    name:"User",
    initialState: initialValue,
    reducers:{
        saveUser:(state,action)=>{
            state.name= action.payload.name
            state.email= action.payload.email
        }
    }

})
export const {saveUser} = UserSlice.actions
export default UserSlice.reducer