import {useForm } from 'react-hook-form'
import { nanoid } from "nanoid";



const Form = ({setUser,setToggle,setUpdatedData,user,updatedData}) => {
  
console.log(updatedData)
 
    let {register,handleSubmit,reset,formState:{errors}} = useForm({
      mode:"onChange",
      defaultValues:
        updatedData
      })

     
        
    let formHandle = (data) => {

      if(updatedData){

       setUser((prev)=>{
        return prev.map((val) => {
          return val.id === updatedData.id ? { ...val, ...data } : val;
        })
       })
        
      }else{
          let arr = [...user,{...data,id:nanoid()}]
          setUser(arr)
      }
     
      
      reset()
      setUpdatedData(null)
      setToggle((prev) => !prev)
    }


  return (
    <div className='flex flex-col gap-3 items-center'>
      <h1>Create user</h1>
      <form 
      onSubmit={handleSubmit(formHandle)}
      
      className='flex flex-col  w-90 p-4 gap-2 border-2 rounded border-white'>

        <input
        {...register('name',{required:"Name is required"})}
        
         className='p-2 rounded border border-gray-800 outline-0' type="text" placeholder='Name' />
        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

        <input
        {...register('email',{required:"Email is required",
          pattern:{
            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message:"Please enter a valid email"
          }
        })}
         className='p-2 rounded border border-gray-800' type="email" placeholder='Email' />
        {errors.email && <p className='text-red-600'>{errors.email.message}</p> }

        <input
        {...register('mobile',{
          required:"Mobile is required",
          minLength:{
            value:10,
            message:"minimum 10 digits are required"
          },
          maxLength:{
            value:10,
            message:"maximum 10 digits are required"
          }
        })}
       
         className='p-2 rounded border border-gray-800' type="number" placeholder='Mobile' />
        {errors.mobile && <p className='text-red-600'>{errors.mobile.message}</p>}

        <input
        {...register('image',{required:"Image is required"})}        
         className='p-2 rounded border border-gray-800' type="url" placeholder='Image' />
         {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
         

        <button 
       
        className='p-2 bg-blue-500 rounded cursor-pointer'>Add user</button>
        
      </form>
    </div>
  )
}

export default Form
