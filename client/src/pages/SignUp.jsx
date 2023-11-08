export default function SignUp() {
  return (
    <div className="max-w-lg mx-auto mt-20 bg-teal-100 p-5 rounded-lg">
      <h1 className="text-center text-2xl mb-10">Sign-up</h1>
      <form className="flex flex-col gap-3" >
        <div className=" flex flex-col gap-1">
        <span className="text-sm font-serif tracking-wider text-gray-600 font-medium">Username</span>
        <input className="rounded-lg border-neutral-300 p-2  focus: outline-none focus:ring-0  focus:border-2 focus:shadow-lg focus:border-gray-400" type="text" i="email" /></div>
        <div className="flex flex-col gap-1"><span className="text-sm font-serif tracking-wider text-gray-600 font-medium">Email</span>
        <input className="rounded-lg border-neutral-300 p-2 focus: outline-none focus:ring-0  focus:border-2 focus:shadow-lg focus:border-gray-400"type="email" id="email" /></div>
        <div className="flex flex-col gap-1"><span className="text-sm font-serif tracking-wider text-gray-600 font-medium">Password</span>
        <input className="rounded-lg border-neutral-300 p-2 focus: outline-none focus:ring-0  focus:border-2 focus:shadow-lg focus:border-gray-400" type="password" i="email" /></div>
        <button className="bg-slate-600 p-3 text-white rounded-lg uppercase my-6">Submit</button>


      </form>
      <span className="text-center text-sm mb-10" >Already have an account ?</span>
    </div>

  );
}
