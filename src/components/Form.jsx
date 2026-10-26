import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'



const Form = ({setUser,setToggle,setUpdatedData,user,updatedData}) => {
  
console.log(updatedData)
 
    let {register,handleSubmit,reset,formState:{errors}} = useForm({
      mode:"onChange",
      defaultValues:
        updatedData
      })

     
        
    let formHandle = (data) => {

      if(updatedData){
        const updatedUsers = user.map((val) =>
          val.id === updatedData.id ? { ...data, id: updatedData.id } : val
        )
        setUser(updatedUsers)
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        
      }else{
          let arr = [...user,{...data,id:nanoid()}]
          setUser(arr)
          localStorage.setItem("users", JSON.stringify(arr));
      }
     
      
      reset()
      setUpdatedData(null)
      setToggle((prev) => !prev)
    }


  return (
    <div className='flex w-full flex-col items-center gap-3'>
      <h1 className='text-xl font-semibold'>{updatedData ? 'Update user' : 'Create user'}</h1>
      <form 
      onSubmit={handleSubmit(formHandle)}
      
      className='flex w-full max-w-md flex-col gap-2 rounded border-2 border-white p-4'>

        <input
        {...register('name',{required:"Name is required"})}
        
         className='w-full rounded border border-gray-800 p-2 outline-0' type="text" placeholder='Name' />
        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

        <input
        {...register('email',{required:"Email is required",
          pattern:{
            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message:"Please enter a valid email"
          }
        })}
         className='w-full rounded border border-gray-800 p-2' type="email" placeholder='Email' />
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
       
         className='w-full rounded border border-gray-800 p-2' type="number" placeholder='Mobile' />
        {errors.mobile && <p className='text-red-600'>{errors.mobile.message}</p>}

        <input
        {...register('image',{required:"Image is required"})}        
         className='w-full rounded border border-gray-800 p-2' type="url" placeholder='Image' />
         {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
         

        <button 
       
        className='mt-2 w-full cursor-pointer rounded bg-blue-500 p-2 text-white'>
          {updatedData ? 'Save changes' : 'Add user'}
        </button>
        
      </form>
    </div>
  )
}

export default Form
