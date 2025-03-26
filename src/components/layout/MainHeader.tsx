import React, { useState } from "react";
import {
  AddressIcon,
  ArrowIcon,
  CalculateIcon,
  HomeIcon,
  UserIcon,
} from "../assets/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "../shared/LoginModal";
import { useMediaQuery } from "react-responsive";

const menus = [
  // { title: "Бидний тухай", link: "/about" },
  { title: "Тооцоолуур", link: "/calculate" },
  { title: "Хаяг холбох", link: "/address" },
  // { title: "Үйлчилгээний нөхцөл", link: "/terms" },
];

const MainHeader = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <header className="fixed w-full top-0 bg-white z-10 xs:h-16 lg:h-28 border-b border-b-light">
        <div className="text-sm container mx-auto xs:h-16 lg:h-28 flex items-center justify-between xs:px-2 2xl:px-4">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-6 xs:px-4">
              {isMobile ? (
                <div
                  onClick={() => navigate(-1)}
                  className={`${
                    (pathname === "/" && "hidden") ||
                    (pathname === "/calculate" && "hidden") ||
                    (pathname === "/address" && "hidden")
                  } fill-white stroke-1 stroke-black h-9 w-9 flex items-center justify-center border border-light rounded-lg pr-1 cursor-pointer z-20`}
                >
                  <ArrowIcon size="22" />
                </div>
              ) : null}
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
              onClick={() => setVisible(true)}
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
      <footer
        className={`${
          ["/", "/calculate", "/address"].includes(pathname)
            ? "xs:grid"
            : "hidden"
        } grid-cols-3 lg:hidden fixed !bg-white z-10 bottom-0 border-t border-t-light h-16 w-full items-center justify-evenly`}
      >
        <Link
          to={`/`}
          className={`flex-col flex items-center gap-px text-xs font-regular ${
            pathname === "/" ? "text-primary" : "text-dark"
          }`}
        >
          <span
            className={`flex items-center stroke-2 px-4 ${
              pathname === "/" ? "stroke-primary" : "stroke-dark"
            } transition-all hover:stroke-primary`}
          >
            <HomeIcon />
          </span>
          Нүүр хуудас
        </Link>
        <Link
          to={`/calculate`}
          className={`flex-col flex items-center gap-px text-xs font-regular ${
            pathname === "/calculate" ? "text-primary" : "text-dark"
          }`}
        >
          <span
            className={`flex items-center stroke-2 px-4 ${
              pathname === "/calculate" ? "stroke-primary" : "stroke-dark"
            } transition-all hover:stroke-primary`}
          >
            <CalculateIcon />
          </span>
          Тооцоолуур
        </Link>
        <Link
          to={`/address`}
          className={`flex-col flex items-center gap-px text-xs font-regular ${
            pathname === "/address" ? "text-primary" : "text-dark"
          }`}
        >
          <span
            className={`flex items-center stroke-2 px-4 ${
              pathname === "/address" ? "stroke-primary" : "stroke-dark"
            } transition-all hover:stroke-primary`}
          >
            <AddressIcon />
          </span>
          Хаяг холбох
        </Link>
      </footer>
      <LoginModal open={visible} onClose={() => setVisible(false)} />
    </>
  );
};

export default MainHeader;
