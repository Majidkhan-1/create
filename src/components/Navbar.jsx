const Navbar = ({setToggle}) => {
  return (
    <header className='flex flex-col items-center gap-3 rounded bg-green-600 p-3 sm:flex-row sm:justify-between'>
      <div>
        <img width={43} className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXze31Ftkykf-vSbA9d2ajVmcIq96jNK2RW3OQRk8L-Q&s=10" alt="User manager logo" />
      </div>
      <nav className='flex flex-wrap justify-center gap-4 font-semibold sm:gap-6'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
      <button
      onClick={()=>setToggle((prev)=>!prev)}
       className='w-full cursor-pointer rounded bg-blue-800 p-2 text-white sm:w-auto'>Create user</button>
    </header>
  )
}

export default Navbar
