import {_FORM_DATA, __GET_FORM_DATA} from './actionType';

const intialSate = {
   formValues:[],
}

const formReducer = (state=intialSate, action) =>{
    switch(action.type){
        case _FORM_DATA: 
        console.table(action.payload)
            return{
                ...state,
                formValues:action.payload,   
            }
        default: return state;
    }
}

export default formReducer;


const empIntialSate = {
    getformValues:[],
 }
 
 export const getformReducer = (state=empIntialSate, action) =>{
     switch(action.type){
         case __GET_FORM_DATA: 
         console.table("getformreducer")
         console.table(action.payload)
             return{
                 ...state,
                 getformValues:action.payload,   
             }
         default: return state;
     }
 }
 
