import React from 'react';
import './formik.css';
import {useFormik} from 'formik';
const Formik1 = () => {
    const initialValues = {
        name:'ghgg',
        emali:'',
        channel:''
    }
    const onSubmit = state => {
        console.log(state)
    }
    const validate = values => {
        const error = {};
            if(!values.name) error.name='Requried';
            else if((values.name).length <=4 || (values.name).length >=12) error.name='Please Enter valid Name';
            
            if(!values.emali) error.emali='Requried';
            else if(!values.emali.endsWith('@gmail.com')) error.emali='Invalid Email';
            
            if(!values.channel) error.channel='Requried';

           
        return error;
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });
    return (
        <div className='formContainer'>
            <form className='formContent' onSubmit={formik.handleSubmit}>
                <div><b>Form By React_Formik</b></div>
                <div className="formFileds">
                    <label htmlFor='name'>User_Name :</label>
                    <input type='text' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} autoComplete='off'/>
                    {formik.errors.name && formik.touched.name ? (<p>{formik.errors.name}</p>) : null}
                </div>
                <div className="formFileds">
                    <label htmlFor='emali'>Email_Address :</label>
                    <input type='email' name='emali' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.emali} autoComplete='off'/>
                    {formik.errors.emali && formik.touched.emali ? (<p>{formik.errors.emali}</p>) : null}
                </div>
                <div className="formFileds">
                    <label htmlFor='channel'>channel_Name :</label>
                    <input type='text' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} autoComplete='off'/>
                    {formik.errors.channel && formik.touched.channel ? (<p>{formik.errors.channel}</p>) : null}
                </div>
                <div className="formFileds">
                    <input type='submit' value='Submit' />
                </div>
            </form>
        </div>
    );
}

export default Formik1;
