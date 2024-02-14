

import { Link } from 'react-router-dom';
import date from '../assets/date.svg'
import location from '../assets/location.svg'

export default function Card(props) {

  let givenDate = new Date(props.date)
  givenDate = givenDate.toLocaleDateString();
  return (
    <div className=" bg-white border-2 rounded-xl mx-4 my-6 shadow-md h-[18rem] min-w-[14rem] max-w-[14rem] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-200 ">
      <div className="w-full  rounded-xl relative ">
        <img src={props.imageUrl} className="w-full rounded-t-xl h-[9rem] object-cover" alt="" />
        <div className="bg-white w-20  text-sm font-semibold absolute top-2 right-2 border rounded-md text-center text-slate-900">{props.category}</div>
      </div>
      <div className=" flex flex-col gap-3 p-3">
        <span className="text-md font-semibold text-slate-800 line-clamp-1 uppercase">{props.title}</span>
        <div className="flex flex-col gap-1">
        <div className="flex gap-2 text-xs">
            <img src={date} alt="" className="w-[1.1rem]"/>
            <span>{givenDate} </span>

        </div>
        <div className="flex gap-2 text-xs" >
            <img src={location} alt="" className="w-[1.1rem]"/>
            <span className="line-clamp-1"> {props.venue} </span>

        </div>
        </div>
        <Link to={props.registerUrl}>
    <button className="border-2 bg-[#b23a48] text-white p-1 text-xs w-[5rem] rounded-md  hover:opacity-90">Register</button>
    </Link>
      </div>
    </div>
  );
}
