import React, { useEffect } from "react";
import { useStateContext } from "../Contexts/Contextprovider";
import { FiMenu } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsChatText } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import avatar from "../data/avatar.jpg";
import {MdKeyboardArrowDown} from 'react-icons/md';
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from './Notification';
import UserProfile from "./UserProfile";

export default function Navbar() {
  const {
    activeMenu,
    setactiveMenu,
    isClicked,
    currentColor,
    scrrensize,
    setscrrensize,
    handleClick,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setscrrensize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (scrrensize <= 900) {
      setactiveMenu(false);
    } else {
      setactiveMenu(true);
    }
  }, [scrrensize]);

  const NavButton = ({ title, custonFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomRight" enableRtl={true}>
      <button
        type="button"
        onClick={custonFunc}
        style={{ color }}
        className="relative hover:bg-gray-100 p-3 rounded-full text-xl flex items-center">
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"></span>
        {icon}
      </button>
    </TooltipComponent>
  );


  return (
    <div className="flex border-b-1 border-gray-600 justify-between items-center pb-1"> 
      <NavButton
        title="منو"
        custonFunc={() => setactiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<FiMenu />}></NavButton>

      <div className=" flex flex-row-reverse">
        <NavButton
          title="سبد خرید"
          custonFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}></NavButton>

        <NavButton
          title="چت"
          custonFunc={() => handleClick("chat")}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatText />}></NavButton>

        <NavButton
          title="اطلاع رسانی"
          custonFunc={() => handleClick("notification")}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<RiNotification2Line />}></NavButton>

        <TooltipComponent
          enableRtl={true}
          position="BottomRight"
          content="پروفایل">
          <div
            className="flex items-center justify-center gap-2 cursor-pointer ml-4 mt-[3px] p-1 hover:bg-gray-100 rounded-lg"
            onClick={() => handleClick("userProfile")}>
            <img src={avatar} className="rounded-full w-7 h-7" />
            <p className="">
              <span className=" text-gray-400 text-14 select-none">سلام ، </span>
              <span className=" text-gray-400 text-14">پازل</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart /> }
        {isClicked.chat && <Chat /> }
        {isClicked.notification && <Notification /> }
        {isClicked.userProfile && <UserProfile /> }


      </div>
    </div>
  );
}
