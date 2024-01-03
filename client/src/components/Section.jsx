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
    <div className=" mt-24 mb-4 w-[85rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className="text-3xl font-bold text-slate-700 m-4 tracking-wide ">
        <span>
            Trending Events
        </span>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{trendingElements}</div>
    </div>
    <div className=" my-12 w-[85rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className="text-3xl font-bold text-slate-700 m-4 tracking-wide ">
        <span>
            Ongoing Events
        </span>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{ongoingElements}</div>
    </div>
    <div className=" my-12 w-[85rem] bg-white mx-auto border rounded-xl p-4 shadow-lg shadow-purple-300">
      <div className="text-3xl font-bold text-slate-700 m-4  tracking-wide">
        <span>
            Upcoming Events
        </span>
      </div>
      <div className="flex overflow-y-hidden overflow-x-auto mb-2 ">{upcomingElements}</div>
    </div>

    </div>

  );
}
