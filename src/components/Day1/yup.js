import React from 'react';
import './formik.css';
import {useFormik} from 'formik';
import * as yup from 'yup';
const Yup = () => {
    const initialValues = {
        name:'',
        emali:'',
        channel:''
    }
    const onSubmit = state => {
        console.log(state)
    }
    const validationSchema = yup.object({
        name: yup.string().required('requried! name').min(4,'Please entername').max(12,'Please entername'),
        emali: yup.string().email('invalid email address').required('Requried email'),
        channel: yup.string().required('Requried channel name').uppercase('Channel must be uppercase')
    });
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });
    console.log(formik)
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

export default Yup;
