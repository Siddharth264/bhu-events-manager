import Logo from '../assets/Logo.png'
export default function Header() {
  return (
    <div className='flex flex-row shadow-lg max-w-full max-h-26  bg-gradient-to-r from-indigo-200 from-10% via-sky-400 via-30% to-emerald-300 to-90% ...'> 
    <img className='h-28 w-80 ' src={Logo} alt="logo" />
    <div className='mr-0 ml-auto'>
    <button className=' h-7 w-20 rounded-lg  mr-6 mt-10 uppercase  font-sans font-medium tracking-wide text-white text-lg outline outline-offset-2 outline-1  shadow-xl  no-underline hover:underline  '>About</button>
    <button className=' h-7 w-20 rounded-lg mr-6 mt-10 uppercase font-sans font-medium tracking-wide text-white text-lg outline outline-offset-2 outline-1 shadow-xl no-underline hover:underline '>Home</button>
    <button className=' h-7 w-20 rounded-lg mr-16 mt-10 uppercase font-sans font-medium tracking-wide text-white text-lg outline outline-offset-2  outline-1 shadow-xl no-underline hover:underline '>Sign Up</button></div>
    </div> 
  ) 
}
 