import React from 'react';
import './formik.css';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
const FormikComp = () => {
    const initialValues = {
        name:'',
        email:'',
        channel:''
    }
    const onSubmit = state => {
        console.log(state)
    }
    const validationSchema = yup.object({
        name: yup.string().required('requried! name').min(4,'Please entername').max(12,'Please entername'),
        email: yup.string().email('invalid email address').required('Requried email'),
        channel: yup.string().required('Requried channel name').uppercase('Channel must be uppercase')
    })

    return (
        <div className='formContainer'>
            <Formik  
            initialValues={initialValues} 
            onSubmit={onSubmit} 
            validationSchema={validationSchema}>
            <Form className='formContent'>
                <div><b>Form By React_Formik</b></div>
                <div className="formFileds">
                    <label htmlFor='name'>User_Name :</label>
                    <Field type='text' name='name' autoComplete='off'/>
                    <p><ErrorMessage name='name'/></p>
                </div>
                <div className="formFileds">
                    <label htmlFor='email'>Email_Address :</label>
                    <Field type='email' name='email' autoComplete='off'/>
                    <p><ErrorMessage name='email'/></p>
                </div>
                <div className="formFileds">
                    <label htmlFor='channel'>channel_Name :</label>
                    <Field type='text' name='channel' autoComplete='off'/>
                    <p><ErrorMessage name='channel'/></p>
                </div>
                <div className="formFileds">
                    <input type='submit' value='Submit' />
                </div>
            </Form>
            </Formik>
        </div>
    );
}

export default FormikComp;




