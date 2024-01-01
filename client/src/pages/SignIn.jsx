import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {
  signInStart,
  signInFailure,
  signInSuccess
} from "../redux/user/userSlice"
export default function SignIn() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const {loading, error} = useSelector((state)=> state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInStart())
    try{
      const res = await fetch('/api/v1/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formState),
      })

      const data = await res.json()
      if(data.success === false){
       dispatch(signInFailure(data.message));
        return
      }
     dispatch(signInSuccess(data))
      navigate('/')
    }catch(error){
      dispatch(signInFailure(error.message))
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-32 bg-white  shadow-2xl p-10 rounded-l">
      <h1 className="text-center text-2xl mb-10 uppercase">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-serif tracking-wider text-gray-600 font-medium">
            Email
          </span>
          <input
            className="rounded-lg border-neutral-300 p-2 focus: outline-none focus:ring-0  focus:border-2 focus:shadow-lg border-2 focus:border-gray-400"
            type="email"
            id="email"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-serif tracking-wider text-gray-600 font-medium">
            Password
          </span>
          <input
            className="rounded-lg border-neutral-300 p-2 focus: outline-none focus:ring-0  focus:border-2 focus:shadow-lg border-2 focus:border-gray-400"
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button disabled={loading} className="bg-slate-600 p-3 text-white rounded-lg uppercase my-6">
          Submit
        </button>
      </form>
      <span className="text-center text-sm mb-10"> Dont have an account ?</span>
      <Link to={"/signup"}>
        {" "}
        <span className="text-center text-sm mb-10 text-blue-700">Sign Up</span>
      </Link>
      {error && <p className="text-xs text-red-700 mt-4 font-bold text-center">{error}</p>}

    </div>
  );
}
