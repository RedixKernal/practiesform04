import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import axios from 'axios';
// import send from './form.json';
const Nested1 = () => {
    const initialValues={
        personal:{
            name:'',
            password:'',
        },
        fb:{
            name:'',
            password:'',
        },
        phNumber:['','','','']
    }
    const handleSubmit = state => {
        
        axios.get(`form.json`)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label htmlFor="name">Username</label>
                        <Field type="text" name="personal.name" />
                        <ErrorMessage name='personal.name'>
                            {
                                (error)=>{
                                    return <p>{error}</p>
                                }
                            }
                        </ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="text" name="personal.password"/>
                    </div>
                    <div>
                        <label htmlFor="password">FBName</label>
                        <Field type="text" name="fb.name"/>
                    </div>
                    <div>
                        <label htmlFor="password">FBPassword</label>
                        <Field type="text" name="fb.password"/>
                    </div>
                    <div>
                        <label htmlFor="name">Username</label>
                        <Field type="text" name="phNumber[0]"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="text" name="phNumber[1]"/>
                    </div>
                    <div>
                        <label htmlFor="password">FBName</label>
                        <Field type="text" name="phNumber[2]"/>
                    </div>
                    <div>
                        <label htmlFor="password">FBPassword</label>
                        <Field type="text" name="phNumber[3]"/>
                    </div>
                    <div>
                        <button type='submit'>Validate</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Nested1;
