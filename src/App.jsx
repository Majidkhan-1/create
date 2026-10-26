import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {
  
  let [toogle,setToggle] = useState(false);

  let[user,setUser] = useState(()=>{
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    return storedUsers.map((storedUser) => ({
      ...storedUser,
      id: storedUser.id || nanoid(),
    }))
  });

let[updatedData,SetUpdatedData] = useState(null);

useEffect(() => {
  localStorage.setItem('users', JSON.stringify(user))
}, [user])

let deleteUser = (id)=>{
  let filered = user.filter((val)=> val.id !== id)
  setUser(filered)
}

  return (
    <div className='p-3 flex flex-col gap-4'>
      <Navbar setToggle={setToggle}/>

     {
      toogle?(<div className='flex flex-wrap gap-4'>
       {user.map((elem)=>{
        return <UserCard 
        
        SetUpdatedData={SetUpdatedData}
        deleteUser={deleteUser}
        key={elem.id} 
        user={elem}
       setToggle={setToggle} />
       })}
     </div>): <div className=' h-[70%]  justify-center items-center'>
     <Form
     updatedData={updatedData}
      setUpdatedData={SetUpdatedData}
      setUser={setUser}
      setToggle={setToggle} 
      user={user}   />
     </div>
     } 
     
    
    </div>
  )
}

export default App
