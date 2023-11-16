import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import {useNavigate} from 'react-router-dom'
export default function Header() {

  const navigate = useNavigate()

  const handleSignout = async () => {
    const res = await fetch(`/api/v1/auth/signout`);
    const data = await res.json();

    if(data.success === false){
      alert(data.message);
    }
    navigate('/signin')
  }

  return (
    <div className="flex flex-row shadow-lg max-w-full max-h-26  bg-gradient-to-r from-indigo-200 from-10% via-sky-400 via-30% to-emerald-300 to-90% ...">
      <img className="h-28 w-80 " src={Logo} alt="logo" />
      <div className="mr-0 ml-auto">
        <Link to={'/about'}>
        <button className=" h-7 w-20 rounded-lg  mr-6 mt-10 uppercase font-sans font-medium tracking-wide text-white text-sm outline outline-offset-2 outline-1  shadow-xl  no-underline hover:bg-cyan-500  ">
          About
        </button>
        </Link>
        <Link to={'/'}>
        <button className=" h-7 w-20 rounded-lg mr-6 mt-10 uppercase font-sans font-medium tracking-wide text-white text-sm outline outline-offset-2 outline-1 shadow-xl no-underline  ">
          Home
        </button>
        
        </Link> 
        <Link to={'/signup'}>
        <button onClick={handleSignout} className=" h-7 w-20 rounded-lg mr-16 mt-10 uppercase font-sans font-medium tracking-wide text-white text-sm outline outline-offset-2  outline-1 shadow-xl no-underline  ">
          Sign Up
        </button>
        </Link>
      </div>
    </div>
  );
}
