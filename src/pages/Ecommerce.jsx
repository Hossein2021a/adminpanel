import React from "react";
import { useStateContext } from "../Contexts/Contextprovider";
import Buttons from "../components/Buttons";
import { SparklineAreaData, earningData } from "../data/dummy";
import Sparkline from "../components/Charts/Sparkline";
import Stacked from "../components/Charts/Stacked";

export default function Ecommerce() {
  const { currentColor } = useStateContext();

  return (
    <div className="p-8">
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center w-full flex-col bg-hero-patternLight dark:bg-hero-pattern h-44 lg:h-64 bg-center  bg-cover rounded-lg text-center ">
          <div className="flex flex-col ">
            <span className=" font-bold pb-2 dark:text-gray-100">درآمدها : </span>
            <span className="text-xl dark:text-gray-200">50,735,45$</span>
          </div>

          <div className="mt-6">
            <Buttons
              bgColor={currentColor}
              color="White"
              borderR="10px"
              size="md"
              text="دانلود"
              withd="10rem"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2 justify-between">
        {earningData.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-secondary-dark-bg rounded-lg flex flex-col pt-6 pb-6 items-center place-items-center">
            <button
              type="button"
              className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
              {item.icon}
            </button>

            <p className=" mt-3 flex flex-row-reverse items-center justify-center">
              <span className=" text-gray-700 dark:text-gray-100">
                {item.amount}
              </span>
              <span className={`text-sm ml-2`} style={{ color: item.pcColor }}>
                {item.percentage}
              </span>
            </p>

            <span className="text-sm text-gray-400 pt-2">{item.title}</span>
          </div>
        ))}
      </div>

      <div className=" flex gap-10 justify-center flex-wrap">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 ds mt-4 p-4 rounded-2xl w-full flex flex-col ">
          <span className="flex justify-between items-center">
            <span>به روز رسانی درآمدها</span>
            <span className="flex gap-5">
              <span className="flex items-center justify-center">
                <span className="w-1.5 h-1.5 ml-1 inline-block rounded-full bg-white "></span>
                <span className="">هزینه ها</span>
              </span>

              <span className="flex items-center justify-center">
                <span className="w-1.5 h-1.5 ml-1 inline-block rounded-full  bg-green-400"></span>
                <span className="text-green-400"> بودجه ها </span>
              </span>
            </span>
          </span>

          <div className="flex md:flex-row-reverse md:flex-wrap md:mt-10 justify-evenly items-center flex-col-reverse">

            <div className=" md:w-6/12 items-center flex flex-col md:border-r-1 md:border-gray-500 pr-5 p-5 min-w-[200px] text-lg">
              <div className="pb-8 text-center">
              <div className="mb-2 text-center">
              <span className="text-center bg-green-100 dark:text-gray-500 rounded-3xl p-1 pr-2 pl-2 text-sm ">بودجه</span>
              </div>

              <div className="flex flex-row-reverse justify-center  items-center gap-2 ">
                <span className=" font-semibold">$102,345</span>
                <span className="text-xs text-gray-100 bg-green-500 rounded-3xl p-1">45%</span>
              </div>
              </div>

              <div>
              <div className="mb-2 ">
              <span className= "text-center bg-green-100 dark:text-gray-500 rounded-3xl p-1 pr-2 pl-2 text-sm  ">مقدار  هزینه صورت گرفته :</span>
              </div>

              <div className="flex text-center justify-center  flex-row-reverse items-center gap-2 ">
                <span className="  font-semibold">$58,345</span>
              
              </div>
              </div>

              <div className="mt-5 ltr">

                <Sparkline id="line-sparkline" type ="Line" 
                height="80px" width="250px"  data={SparklineAreaData} color={currentColor} />

              </div>

              <div className="pt-6 text-sm">
              <Buttons bgColor={`${currentColor}`} text="دانلود گزارش" color="white" borderR="1.5rem" withd="6rem"  />
              </div>
              
            </div>


            <div className="mt-10 rtl pl-5 md:w-6/12 md:items-center md:flex md:justify-center">

              <Stacked width="360px" height="360px"  />

            </div>


          </div>


        </div>
      </div>
    </div>
  );
}
