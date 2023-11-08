export default function Home() {
  return (
    <div className="flex m-10">
      <div className=" w-96 float-left h-96 bg-slate-300">
        <div className="flex bg-red-100 p-2 m-3 border rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
          <span className="pl-2">Technology</span>
        </div>
        <div className="bg-red-100 p-2 m-3 border rounded-sm ">
          <span>Extra-curriculum</span>
        </div>
        <div className="bg-red-100 p-2 m-3 border rounded-sm ">Sports</div>
        <div className="bg-red-100 p-2 m-3 border rounded-sm ">
          Self-improvement
        </div>
        <div className="bg-red-100 p-2 m-3 border rounded-sm ">Technology</div>
        <div className="bg-red-100 p-2 m-3 border rounded-sm ">Technology</div>
      </div>
      <div className="bg-slate-500 h-96 w-full">Events Container</div>
    </div>
  );
}
