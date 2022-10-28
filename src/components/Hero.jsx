import { Pizza } from "../assets";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className="px-4 bg-primary h-screen flex items-center">
      <div className="flex flex-col-reverse xl:flex-row justify-center items-center m-auto lg:content-center">
        <div>
          <h1 className="text-3xl xl:text-5xl font-bold my-4 xl:w-[532px] ">
            <Marquee>
              Are You Hungry ? <br /> Express Home Delivery
            </Marquee>
          </h1>
          <div className="flex">
            <div className="bg-black h-1 xl:w-[150px] invisible xl:visible mt-3 "></div>
            <p className="text-lg xl:text-[14px] xl:w-[274px] xl:text-left xl:ml-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="my-5 xl:my-0">
          <img src={Pizza} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
