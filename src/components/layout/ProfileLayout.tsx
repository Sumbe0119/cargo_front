import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BoxIcon, PasswordIcon, UserIcon } from "../assets/icons";

const ProfileLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="container flex gap-6">
      <div className="block w-[340px] border border-light rounded-lg">
        <div className="flex-col flex px-5 py-3">
          <Link
            to={`/profile`}
            className={`text-base font-semibold flex gap-3 items-center h-11 cursor-pointer ${
              pathname === "/profile" ? "text-dark " : "text-dark/50"
            }`}
          >
            <div
              className={`fill-white stroke-1 ${
                pathname == "/profile" ? "stroke-dark" : "stroke-dark/50"
              } `}
            >
              <UserIcon size="20" />
            </div>
            Миний
          </Link>
          <Link
            to={`/profile/order`}
            className={`text-base font-semibold flex gap-3 items-center h-11 cursor-pointer ${
              pathname === "/profile/order" ? "text-dark " : "text-dark/50"
            }`}
          >
            <div
              className={`fill-white stroke-1 ${
                pathname == "/profile/order" ? "stroke-dark" : "stroke-dark/50"
              } `}
            >
              <BoxIcon size="20" />
            </div>
            Захиалгын хуудас
          </Link>
          <Link
            to={`/profile/password`}
            className={`text-base font-semibold flex gap-3 items-center h-11 cursor-pointer ${
              pathname === "/profile/password" ? "text-dark " : "text-dark/50"
            }`}
          >
            <div
              className={`fill-white stroke-1 ${
                pathname == "/profile/password"
                  ? "stroke-dark"
                  : "stroke-dark/50"
              } `}
            >
              <PasswordIcon size="20" />
            </div>
            Нууц үг солих
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
