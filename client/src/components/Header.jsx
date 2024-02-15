import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signOutStart,
  signOutSuccess,
  signOutFailure,
} from "../redux/user/userSlice";
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch(`/api/v1/auth/signout`);
      const data = await res.json();

      if (data.success === false) {
        dispatch(signOutFailure(data.message));
        return;
      }
      dispatch(signOutSuccess());
      navigate("/signin");
    } catch (error) {
      dispatch(signOutFailure());
    }
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex gap-3  items-center  m-2  p-2 ">
        <img className="h-[3rem] " src={Logo} alt="logo" />
        <div className="flex items-center ">
          <span className="text-2xl font-bold italic  text-slate-700">
            Event{" "}
          </span>
          <span className="text-2xl font-bold italic text-[#ff644c]">Sync</span>
        </div>
      </div>
      <div className="mr-[2rem] flex gap-5 font-semibold text-slate-700 ">
        <Link to={"/"}>
          <button className="   ">Home</button>
        </Link>
        <Link to={"/about"}>
          <button className="  ">Our Company</button>
        </Link>
        <Link>Join Us</Link>

        <Link>Hire Us</Link>
      </div>
     {currentUser?  <div className="flex gap-4 mr-4 items-center ">

      <img src={currentUser.avatar} className="w-7 rounded-full " alt="" />
        <Link to={"/signin"}>
          <button className="  " onClick={handleSignout}>Logout</button>
        </Link>
      </div> :   <div className="flex gap-4 mr-4 items-center">
        <Link to={"/signup"}>
          <button className=" text-sm font-semibold  hover:opacity-70 ">Sign Up</button>
        </Link>
        <Link to={"/signin"}>
          <button className=" bg-black text-white p-2 w-[5rem] border-none font-bold rounded-md text-xs hover:opacity-70">Login</button>
        </Link>
      </div> }
    </div>
  );
}
