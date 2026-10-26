const UserCard = ({user,setToggle,SetUpdatedData,deleteUser}) => {

  return (
    <article className='flex min-w-0 flex-col gap-3 rounded border-2 border-white bg-gray-800 p-3 text-white'>
      <div className='aspect-[4/3] w-full overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src={user.image} alt={user.name} />
      </div>
      <div className='min-w-0'>
        <h2 className='break-words text-lg font-semibold'>{user.name}</h2>
        <p className='break-all text-sm'>{user.email}</p>
        {/* <p className='text-sm'>{user.mobile}</p> */}
      </div>
      <div className='flex w-full gap-3'>

        <button onClick={()=>{
          SetUpdatedData(user);
          setToggle(prev=>!prev)
        }} 
        className='flex-1 rounded bg-yellow-700 px-3 py-2'>Update</button>
        <button 
        onClick={()=>deleteUser(user.id)}
        className='flex-1 rounded bg-red-700 px-3 py-2'>Delete</button>

      </div>
    </article>
  )
}

export default UserCard
