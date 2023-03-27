import React from 'react';
import { useForm} from "react-hook-form";

const stylesByRk= {
    labelbox:{
        display: "block",
        color:"blue",
    },
    textBox:{
        width:"200px",
        height:'20px',
        outline:'none',
        border:"1px solid gray",
        borderRadius:'4px',
    },
    error:{
        // margin:"2px 0px",
        color:'red',
        fontSize:'14px',
        height:'18px'
    },
    button:{
        width:"200px",
        height:"25px"
    },
    con:{
        margin:'auto auto',
    }
}
const ReactHookform = () => {
    console.log("useform : ",useForm());
    const { register, handleSubmit,watch ,getValues,formState: { errors, touchedFields, } } = useForm({
        defaultValues:{
            f_Name: '',
            l_Name:'',
            password:'',
            age:'',
            maritalStatus:'',
            gender:'',
        }
    });
    const age = watch('age',0);
    console.log("values : ",getValues("age"));
    return (
        <div style={stylesByRk.con}>
           <form onSubmit={handleSubmit((values) => {
               console.log(values)
           })}>
               <label style={stylesByRk.labelbox}>First Name :</label>
               <input style={stylesByRk.textBox} {...register('f_Name',{required:"f_name is requried",
                minLength:{
                    value:4,
                    message:"Please enter at least 4 characters"
                }
            })} type="text"/><br />
               
            <div style={stylesByRk.error}>{errors.f_Name?.message}</div>
               <label style={stylesByRk.labelbox}>Last Name :</label>
               <input style={stylesByRk.textBox} {...register('l_Name',{required:"l_name is requried",
                minLength:{
                    value:4,
                    message:"Please enter at least 4 characters"
                },
                maxLength:{
                    value:12,
                    message:"last name can not exceed 12 characters"
                }
            })} type="text"/><br />
            <div style={stylesByRk.error}>{errors.l_Name?.message}</div>

            <label style={stylesByRk.labelbox}>Password :</label>
            <input style={stylesByRk.textBox}
             {...register('password',{required:"password is requried",
                minLength:{
                    value:6,
                    message:"Please enter at least 6 characters"
                },
                maxLength:{
                    value:12,
                    message:"last name can not exceed 12 characters"
                }
            })} type="text"/><br />
            <div style={stylesByRk.error}>{errors.password?.message}</div>

            <label style={stylesByRk.labelbox}>Age :</label>
            <input style={stylesByRk.textBox} {...register('age',{required:"age is requried",
                min:{
                    value:18,
                    message:"age must be 18"
                },
                max:{
                    value:99,
                    message:"age less then 99"
                }
            })} type="text"/><br />
            <div style={stylesByRk.error}>{errors.age?.message}</div>

            {(age>= 18 && age<=30) 
            && <div>
                <label style={stylesByRk.labelbox}>marital Status :</label>
            <select style={stylesByRk.textBox} {...register(
                'maritalStatus',{
                    required:"select maritalStatus"
                }
            )}>
                <option value="">maritalStatus</option>
                <option value="married">married</option>
                <option value="single">single</option>
                <option value="other">other</option>
            </select><br />
            <div style={stylesByRk.error}>{errors.maritalStatus?.message}</div>
            </div>
           
            }

            <label style={stylesByRk.labelbox}>Select gender :</label>
            <select style={stylesByRk.textBox} {...register(
                'gender',{
                    required:"select gender"
                }
            )}>
                <option value="">Selectgender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select><br />
            <div style={stylesByRk.error}>{errors.gender?.message}</div>
               <input style={stylesByRk.button} type="submit"/>
           </form>
        </div>
    );
}

export default ReactHookform;
