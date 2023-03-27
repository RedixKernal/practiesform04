import React from 'react';
import {useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { formData, getAxiosRequest } from '../../redux/action';
import { getformReducer } from '../../redux/reducer';
const Miform = () => {
    const dispatch = useDispatch();
    const {control, handleSubmit} = useForm({
        defaultValues: {
            firstName:'',
            mobileNumber:'',
            lastName:'',
            password:'',
            street:'',
            city:'',
            village:'',
        }
    });

    return (
        <div>
           <form onSubmit={handleSubmit((values) => {
               dispatch(getAxiosRequest())
            //    console.log(values)
           })}>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                        
                        <TextField  
                            label="F_Name" 
                            variant="outlined" 
                            {...field} 
                        />
                    )}
                />
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                        <TextField  
                            label="L_Name" 
                            variant="outlined" 
                            {...field} 
                        />
                    )}
                />
                <br /><br />
                <Controller
                    name="password"
                    control={control}
                    render={({ field}) => (
                        
                        <TextField  
                            label="Password" 
                            variant="outlined" 
                            {...field}
                        />
                    )}
                />

                <Controller
                    name="mobileNumber"
                    control={control}
                    render={({ field}) => (
                        
                        <TextField  
                            label="MobileNumber" 
                            variant="outlined" 
                            {...field}
                        />
                    )}
                /><br /><br />
                <Controller
                    name="street"
                    control={control}
                    render={({ field}) => (
                        
                        <TextField  
                            label="Street" 
                            variant="outlined" 
                            {...field}
                        />
                    )}
                />

                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                        
                        <TextField  
                            label="City" 
                            variant="outlined" 
                            {...field}
                        />
                    )}
                />

                <Controller
                    name="village"
                    control={control}
                    render={({ field }) => (
                        
                        <TextField  
                            label="Village" 
                            variant="outlined" 
                            {...field}
                        />
                    )}
                />
                
                <br /><br />
                <Button type="submit" variant="contained">Submit</Button>
           </form>
        </div>
    );
}

export default Miform;
