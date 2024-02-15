import data from "../assets/data";
import Card from "./Card";
export default function Section() {
    const trendingData = data.filter((item) => item.category === "Trending")
    const ongoingData = data.filter((item) => item.category === "Ongoing")
    const upcomingData = data.filter((item) => item.category === "Upcoming")
    
  const trendingElements = trendingData.map((item) => (
    <Card
      title={item.title}
      date={item.date}
      venue={item.venue}
      registerUrl={item.registerUrl}
      category={item.category}
      imageUrl={item.imageUrl}
      key={item.id}
    />
  ));
  const ongoingElements = ongoingData.map((item) => (
    <Card
      title={item.title}
      date={item.date}
      venue={item.venue}
      registerUrl={item.registerUrl}
      category={item.category}
      imageUrl={item.imageUrl}
      key={item.id}
    />
  ));
  const upcomingElements = upcomingData.map((item) => (
    <Card
      title={item.title}
      date={item.date}
      venue={item.venue}
      registerUrl={item.registerUrl}
      category={item.category}
      imageUrl={item.imageUrl}
      key={item.id}
    />
  ));

  return (
    <div className="">
    <div className=" mt-24 mb-4 w-[78rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className=" flex items-center justify-between pr-2 ">
        
        <span className="text-3xl font-bold text-slate-700 m-4 tracking-wide">
            Trending Events
        </span>
        <button className="border-2 border-slate-300 rounded-lg text-xs text-slate-500 p-[0.4rem] font-bold shadow-md  hover:shadow-lg  ">Explore more</button>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{trendingElements}</div>
    </div>
    <div className=" my-12 w-[78rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className=" flex items-center justify-between pr-2 ">
        
        <span className="text-3xl font-bold text-slate-700 m-4 tracking-wide">
            Ongoing Events
        </span>
        <button className="border-2 border-slate-300 rounded-lg text-xs text-slate-500 p-[0.4rem] font-bold shadow-md   ">Explore more</button>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{ongoingElements}</div>
    </div>
    <div className=" my-12 w-[78rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className=" flex items-center justify-between pr-2 ">
        
        <span className="text-3xl font-bold text-slate-700 m-4 tracking-wide">
            Upcoming Events
        </span>
        <button className="border-2 border-slate-300 rounded-lg text-xs text-slate-500 p-[0.4rem] font-bold shadow-md  ">Explore more</button>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{upcomingElements}</div>
    </div>

    </div>

  );
}
