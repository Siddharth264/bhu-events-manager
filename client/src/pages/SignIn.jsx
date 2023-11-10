import { useState } from 'react'
import {Link} from 'react-router-dom'
export default function SignIn() {
  const [formState, setFormState]= useState({
   email:"", password:""
  })
 
const handleChange=(event) => {
setFormState(prevState=>{
  return{
  ...prevState,
  [event.target.id] : event.target.value
  }
}
)
}
const handleSubmit=(event)=>{
  event.preventDefault()
  console.log(formState)
}
  return (
    <div className="max-w-lg mx-auto mt-32 bg-white  shadow-2xl p-10 rounded-lg">
      <h1 className="text-center text-2xl mb-10 uppercase font-semibold text-mycolor ">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3" >
        
        <div className="flex flex-col gap-1"><span className="text-sm font-serif tracking-wider text-gray-600 font-medium">Email</span>
        <input className="rounded-lg border-neutral-300 p-2 focus: outline-none focus:ring-0  focus:border-2 focus:shadow-xl border-2 focus:border-gray-400 focus:shadow-gray-300"type="email" id="email"  onChange={handleChange} /></div>
        <div className="flex flex-col gap-1"><span className="text-sm font-serif tracking-wider text-gray-600 font-medium">Password</span>
        <input className="rounded-lg border-neutral-300 p-2 focus: outline-none focus:ring-0  focus:border-2 focus:shadow-xl  focus:shadow-gray-300 border-2 focus:border-gray-400" type="password" id="password"  onChange={handleChange} /></div>
        <button className="bg-slate-600 p-3 text-white rounded-lg uppercase my-6">Submit</button>


      </form>
      <span className="text-center text-sm mb-10" > Dont have an account ?</span>
     <Link to={'/signup'}> <span className="text-center text-sm mb-10 text-blue-700">Sign Up</span></Link>
    </div>
  )
}
