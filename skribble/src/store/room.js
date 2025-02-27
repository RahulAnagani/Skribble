import {createSlice} from "@reduxjs/toolkit"
const roomSlice=createSlice({
    name:"Room",
    initialState:{room:{},roomId:"",profile:{},word:"",myTurn:false,timer:{isPresent:false,target:null,type:null,PointsBoard:false}},
    reducers:{
        setRoom:(state,action)=>{
            console.log(action.payload)
            return {...state,room:action.payload.room,roomId:action.payload?.roomId};
        },
        setProfile:(state,action)=>{
            return {...state,profile:action.payload.profile}
        },
        setUsers:(state,action)=>{
            return {...state,room:action.payload}
        },
        setWord:(state,action)=>{
            return {...state,word:action.payload}
        },
        myTurn:(state,action)=>{
            return {...state,myTurn:!state.myTurn}
        },
        setTimer:(state,action)=>{
            return {...state,timer:{isPresent:(action.payload.presence),target:action.payload.timer,type:action.payload.type}}
        },
        setBoard:(state,action)=>{
            return {...state,PointsBoard:action.payload};
        }
    }
})
export default roomSlice;
export const roomActions=roomSlice.actions;