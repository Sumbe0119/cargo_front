import React from "react";
import { HomeIcon, UserIcon } from "../assets/icons";
import { Link, useLocation } from "react-router-dom";
const menus = [
  // { title: "Бидний тухай", link: "/about" },
  { title: "Тооцоолуур", link: "/calculate" },
  { title: "Хаяг холбох", link: "/address" },
];

const MainHeader = () => {
  const { pathname } = useLocation();

  return (
    <header className="border-b border-b-light">
      <div className="text-sm container mx-auto xs:h-16 lg:h-28 flex items-center justify-between xs:px-2 2xl:px-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <ul className="xs:hidden lg:flex items-center font-semibold">
              <li>
                <Link
                  to="/"
                  className={`transition-all ${
                    pathname === "/"
                      ? "text-primary stroke-primary"
                      : "text-black stroke-black"
                  } hover:text-primary p-4`}
                >
                  <div className="flex items-center stroke-2 px-4 transition-all hover:stroke-primary">
                    <HomeIcon />
                  </div>
                </Link>
              </li>
              {menus?.map((item, index) => {
                const isActive = pathname === item?.link;
                return (
                  <li key={index}>
                    <Link
                      to={item?.link}
                      className={`${
                        isActive ? "text-primary" : "text-black"
                      } hover:text-primary transition-text  p-4`}
                    >
                      {item?.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="text-white stroke-white hover:text-primary hover:stroke-primary transition-text hover:bg-primary/10 
        hover:border-primary/10 bg-primary border border-primary rounded-full flex items-center h-11 px-6 gap-2 cursor-pointer"
          >
            <span className={`stroke-2`}>
              <UserIcon size={"16"} />
            </span>
            <span className="font-medium leading-none">Нэвтрэх</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
