import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
    <div className="max-w-4xl flex flex-col gap-6 items-center mt-32 mx-auto shadow-md rounded-md bg-white p-5">
    <h1 className="text-3xl font-bold">Profile</h1>
      <div className="">
        <img src={currentUser.avatar} alt="ProfilePic" className="w-36" />
      </div>
      <div className="text-xl font-semibold">
        <span>Username : {currentUser.username}</span>
      </div>
      <div className="text-xl font-semibold">
        <span>Email : {currentUser.email}</span>
      </div>
      <div className="flex flex-col gap-3">
        <button className="p-3 border rounded-md bg-slate-700 text-white w-64 hover:opacity-90">
          Update Profile
        </button>
        <Link
          to="/create-event"
          className="text-center p-3 border rounded-md bg-orange-600 text-white w-64 hover:opacity-90"
        >
          Create an Event
        </Link>
        <button className="p-3 border rounded-md bg-gray-500 text-white w-64 hover:opacity-90">
          Delete Profile
        </button>
      </div>
      <p className="underline font-semibold text-sm cursor-pointer">Forgot Password?</p>
    </div>
    </>
  );
}
