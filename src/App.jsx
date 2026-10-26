import { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {
  
  let [toogle,setToggle] = useState(false);

  let[user,setUser] = useState(JSON.parse(localStorage.getItem('users')) || [])
   
    
 

let[updatedData,SetUpdatedData] = useState(null);



let deleteUser = (id)=>{
  let filered = user.filter((val)=> val.id !== id)
  setUser(filered)
  localStorage.setItem('users',JSON.stringify(filered))
}

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-4 p-3 sm:p-5'>
      <Navbar setToggle={setToggle}/>

     {
      toogle?(<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
       {user.map((elem)=>{
        return <UserCard 
        
        SetUpdatedData={SetUpdatedData}
        deleteUser={deleteUser}
        key={elem.id} 
        user={elem}
       setToggle={setToggle} />
       })}
     </div>): <div className='flex flex-1 items-start justify-center py-4 sm:items-center'>
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
