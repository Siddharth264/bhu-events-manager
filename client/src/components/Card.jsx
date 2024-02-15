

import { Link } from 'react-router-dom';
import date from '../assets/date.svg';
import location from '../assets/location.svg';
import link from '../assets/link.svg';

export default function Card(props) {
  return (
    <div className=" bg-white border-2 rounded-xl mx-4 my-6 shadow-md h-[18rem] min-w-[12rem] max-w-[12rem] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-200 ">
      <div className="w-full  rounded-xl relative ">
        <img src={props.imageUrl} className="w-full rounded-t-xl h-[8rem] object-cover" alt="" />
        <div className="bg-white w-[4.5rem]  text-sm font-semibold absolute top-2 right-2 border rounded-sm text-center text-slate-900">{props.category}</div>
      </div>
      <div className=" flex flex-col gap-3 p-3">
        <div className='flex gap-2'>
        <span className="text-sm font-semibold text-slate-800 line-clamp-1 uppercase">{props.title}</span>
        <img src={link} alt="" className='w-4'/>
        </div>
        <div className="flex flex-col gap-1">
        <div className="flex gap-2 text-[0.7rem]">
            <img src={date} alt="" className="w-[0.8rem]"/>
            <span>{props.date} </span>

        </div>
        <div className="flex gap-2 text-[0.7rem]" >
            <img src={location} alt="" className="w-[0.8rem]"/>
            <span className="line-clamp-1"> {props.venue} </span>

        </div>
        </div>
        <Link to={props.registerUrl}>
    <button className="border-2 bg-[#b23a48] text-white p-[0.2rem] text-[0.7rem] w-[4rem] rounded-md  hover:opacity-90 mt-4">Register</button>
    </Link>
      </div>
    </div>
  );
}
