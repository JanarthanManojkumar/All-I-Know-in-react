import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export const GForms = () => {
   
    const onSubmit=(data)=>{
        console.log(data);
    }

    const schema =yup.object().shape({
        fullname :yup.string().required(),
        email:yup.string().email().required(),
        age:yup.number().required().positive().integer().min(18),
        password:yup.string().min(8).max(20).required(),
        confirmpassword:yup.string().oneOf([yup.ref('password'),null]).required(),
    })

    const {register,handleSubmit, formState:{errors}}=useForm({resolver:yupResolver(schema)});


  return (
    <div className='w-full h-screen'>

        <form action="" onSubmit={handleSubmit(onSubmit)}  className='flex flex-col w-[70%] justify-between h-[60%] items-center'>
            <input type="text"  placeholder='Name' {...register("fullname")} />
            <input type="email"  placeholder='Email'{...register("email")} />
            <input type="number"  placeholder='Age' {...register("age")}/>
            <input type="password"  placeholder='password' {...register("password")}/>
            <input type="password"  placeholder='confirm-password' {...register("confirmpassword")}/>
            <button type='submit'>Submit</button>
            <h1>
                {errors.fullname?.message}
                {errors.email?.message}
                {errors.age?.message}
                {errors.password?.message}
                {errors.confirmpassword?.message}
            </h1>
        </form>

    </div>
  )
}
