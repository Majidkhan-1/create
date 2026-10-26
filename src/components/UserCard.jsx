const UserCard = ({user,setToggle,SetUpdatedData,deleteUser}) => {



  

  return (
    <div className='border-2 border-white rounded flex flex-col gap-2 bg-gray-800 text-white p-2'>
      <div className='h-40 w-50 '> 
        <img className='object-cover h-full w-full rounded-xl' src={user.image} alt="" />
      </div>
      <div>
        <h1>{user.name}</h1>
        <p className='text-sm'>{user.email}</p>
        {/* <p className='text-sm'>{user.mobile}</p> */}
      </div>
      <div className='flex gap-4 justify-between w-full'>

        <button onClick={()=>{
          SetUpdatedData(user);
          setToggle(prev=>!prev)
        }} 
        className='bg-yellow-700 px-4 py-2 rounded'>Update</button>
        <button 
        onClick={()=>deleteUser(user.id)}
        className='bg-red-700 px-4 py-2 rounded'>Delete</button>

      </div>
    </div>
  )
}

export default UserCard
