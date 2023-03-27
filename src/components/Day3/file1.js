import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
const File1 = () => {
    const formvalues = {
        name:'',
        pwd:''
    }
    const initialTouched = {
        name:true,
        pwd:true
    }
    const initialErrors = {
        name:"-",
        pwd:'-' 
    }
    const initialStatus = {
        name:true,
        pwd:true
    }
    const validationSchema = yup.object({
        name: yup.string().required('Requried! Name').min(4,'Please Enter valid Name'),
        pwd: yup.string().required('Requried! Pwd').min(4,'Please Enter valid Pwd')
    })
    const handleSubmit = state => console.log(state)
    return (
        <div>
            <Formik
            onSubmit={handleSubmit}
            validationSchema = {validationSchema}
             initialValues={formvalues} 
            //  initialTouched={initialTouched}
             initialErrors = {initialErrors}
             initialStatus ={initialStatus}
             >
                {
                    formik => {
                        console.log(formik)
                        console.log(formik.initialStatus)
                        return <Form>
                            <div>
                                <label>user : </label><br />
                                <Field type='text' name='name' />
                                <b><ErrorMessage name='name'/></b>
                            </div>
                            <div>
                                <label>pwd : </label><br />
                                <Field type='text' name='pwd' />
                                <b><ErrorMessage name='pwd'/></b>
                            </div>
                            <hr />
                            <div>
                                <Field type='submit' value='Submit' />
                                <button type='button' onClick={()=> formik.validateField('name')}>Validate_Name</button>
                                <button type='button' onClick={()=> formik.validateField('pwd')}>Validate_Pwd</button>
                                <button type='button' onClick={()=> formik.validateForm()}>Validate_Form</button>
                                <button type='button' >Validate_Form</button>
                            </div>
                        </Form>
                    }
                }
            </Formik>
        </div>
    );
}

export default File1;
