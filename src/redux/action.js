import axios from 'axios';
import {_FORM_DATA, __GET_FORM_DATA} from './actionType';
export const formData = (data) => {
    return{
        type:_FORM_DATA,
        payload:data,
    }
}

export const getFormData = (getEmpdata) => {
    return{
        type:__GET_FORM_DATA,
        payload:getEmpdata,
    }
}

export const getAxiosRequest = () => {
   
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
        console.table(res.data)  
    })
    .catch(e=>{
        console.warn(e.message);
    })
}