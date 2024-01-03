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
      <div className="mr-[2rem] flex gap-3 ">
        <Link to={"/"}>
          <button className="   ">Home</button>
        </Link>
        <Link to={"/about"}>
          <button className="  ">Our Company</button>
        </Link>
        <Link>Join Us</Link>

        <Link>Hire Us</Link>
      </div>
     {currentUser?  <div className="flex gap-2 mr-4">

      <img src={currentUser.avatar} className="w-8 rounded-full " alt="" />
        <Link to={"/signin"}>
          <button className="  " onClick={handleSignout}>Logout</button>
        </Link>
      </div> :   <div className="flex gap-2 mr-4">
        <Link to={"/signup"}>
          <button className="  ">Sign Up</button>
        </Link>
        <Link to={"/signin"}>
          <button className="  ">Login</button>
        </Link>
      </div> }
    </div>
  );
}
