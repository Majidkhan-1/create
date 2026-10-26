import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-3 flex items-center bg-green-600 rounded justify-between'>
      <div>
        <img width={43} className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXze31Ftkykf-vSbA9d2ajVmcIq96jNK2RW3OQRk8L-Q&s=10" alt="" />
      </div>
      <div className='flex gap-6 font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
      onClick={()=>setToggle((prev)=>!prev)}
       className='p-2 bg-blue-800 rounded text-white-900 cursor-pointer'>Create user</button>
    </div>
  )
}

export default Navbar
