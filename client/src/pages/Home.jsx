import Main from "../assets/Main.png";
import Zigzag from "../assets/Zigzag.png";
import Zigzagbg from "../assets/Zigzagbg.png";
import { Typewriter } from "react-simple-typewriter";
import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <div className="flex p-2 gap-2  justify-center">
        <div className="  w-[40rem] flex flex-col  p-2  ">
          <h1 className="flex flex-col text-[3rem] font-semibold text-slate-600 leading-16 mt-32 ml-24">
            <span>We</span>
            <span>keep you</span>
            <span>in sync with</span>
            <span className="text-[3.5rem] text-[#e5383b]">
              <Typewriter
                words={[
                  "Fests",
                  "Seminars",
                  "Webinars",
                  "Workshops",
                  "Festive eves",
                  "Competitions",
                  "Sports events",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <img src={Main} alt="" className="w-[48rem] " />
        <img
          src={Zigzag}
          className="absolute w-[24rem] bottom-6 left-0 -z-10"
        />
        <img
          src={Zigzagbg}
          className="absolute w-[15rem]  top-16  rotate-180 right-12"
        />
      </div>
      <div className="bg-">
        <Section />
      </div>
    </>
  );
}
