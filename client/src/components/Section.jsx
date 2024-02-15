import { useEffect, useState } from "react";
import Card from "./Card";
export default function Section() {
    const [listingData, setListingData] = useState([]);

    useEffect(()=>{
      fetch('/api/v1/event').then(res=>res.json()).then(data => setListingData(data))
    },[])

  const upcoming = listingData.map((item) => (
    <Card
      title={item.title}
      date={item.date}
      venue={item.address}
      registerUrl={item.registerUrl}
      category={item.category}
      imageUrl={item.imageUrl}
      key={item._id}
    />
  ));

 
  
  const sports = listingData.map((item) => {
    if(item.category === "Sports")
    return <Card
      title={item.title}
      date={item.date}
      venue={item.address}
      registerUrl={item.registerUrl}
      category={item.category}
      imageUrl={item.imageUrl}
      key={item._id}
    />
});

const educational = listingData.map((item) => {
  if(item.category === "Educational")
  return <Card
    title={item.title}
    date={item.date}
    venue={item.address}
    registerUrl={item.registerUrl}
    category={item.category}
    imageUrl={item.imageUrl}
    key={item._id}
  />
});

const recreational = listingData.map((item) => {
  if(item.category === "Recreational")
  return <Card
    title={item.title}
    date={item.date}
    venue={item.address}
    registerUrl={item.registerUrl}
    category={item.category}
    imageUrl={item.imageUrl}
    key={item._id}
  />
});
  
    return (
    <div className="">
    <div className=" my-12 w-[85rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className="text-3xl font-bold text-slate-700 m-4  tracking-wide">
        <span>
            Upcoming Events
        </span>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{upcoming}</div>
    </div>

    <div className=" my-12 w-[85rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className="text-3xl font-bold text-slate-700 m-4  tracking-wide">
        <span>
            Educational
        </span>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{educational}</div>
    </div>

     <div className=" my-12 w-[85rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className="text-3xl font-bold text-slate-700 m-4  tracking-wide">
        <span>
            Sports
        </span>
        
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{sports}</div>
    </div>

    <div className=" my-12 w-[85rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className="text-3xl font-bold text-slate-700 m-4  tracking-wide">
        <span>
             Recreational
        </span>
        
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{recreational}</div>
    </div>

    </div>

  );
}
