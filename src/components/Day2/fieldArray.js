import React from 'react';
import {Formik,Form,Field,FieldArray} from 'formik';
const Fieldarray = () => {
    const initialValues = {
        name:'',
        pwd:'',
        numbers:['']
    }
   const handleSubmit = state => {
       console.log(state)
   }
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                <div>
                    <label htmlFor="name">Username : </label>
                    <Field type="text" name="name"/>
                </div>
                <div>
                    <label htmlFor="pwd">Password : </label>
                    <Field type="text" name="pwd"/>
                </div>
                <div>
                
                    <FieldArray name="numbers">
                        {
                            fieldarray => {
                                const {push,remove,form} = fieldarray;
                                const {values} = form;
                                const {numbers} = values;
                                
                                console.log(numbers)
                                return(
                                    <div>
                                        {
                                           numbers.map((numbers,index) => {
                                                return(
                                                    <div key={index}>
                                                        <label htmlFor="pwd">Numbers : </label>
                                                        <Field type="text" name={`numbers[${index}]`}/>
                                                        { index > 0 && <button type='submit' onClick={() => remove(index)}>-</button> }
                                                        <button type='submit' onClick={() => push('')}>+</button>
                                                    </div>
                                                )
                                           })
                                        }
                                    </div>
                                )
                            }
                        }
                    </FieldArray>
                </div>
                <div>
                <label htmlFor="pwd">Validate : </label>
                    <button type='submit'>Validate</button>
                </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Fieldarray;
