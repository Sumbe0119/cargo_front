import React from "react";
import { useLocation } from "react-router-dom";

const list = [
  { id: 1, title: "Бүгд" },
  { id: 2, title: "Хүлээгдэж буй" },
  { id: 3, title: "Эрээн агуулах" },
  { id: 4, title: "Замд гарсан" },
  { id: 5, title: "Улаанбатар агуулах" },
];
const Order = () => {
  const { pathname } = useLocation();
  const [select, setSelect] = React.useState<string>("Бүгд");

  return (
    <div className="flex flex-col gap-6 w-full xs:px-6">
      <h2 className="text-lg font-semibold text-primary">Барааны төлөв</h2>
      <div className="xs:grid xs:grid-cols-3 lg:flex items-center gap-3">
        {list?.map((item, index) => {
          const isActive = select === item?.title;
          return (
            <div
              key={index}
              onClick={() => setSelect(item?.title)}
              className={`group flex items-center justify-center h-8 rounded-lg px-3 cursor-pointer hover:bg-dark transition-all ${
                isActive ? "bg-dark" : "bg-dark/10"
              }`}
            >
              <p
                className={`text-sm font-medium leading-none transition-colors ${
                  isActive ? "text-white" : "text-dark group-hover:text-white"
                }`}
              >
                {item?.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((index) => {
          return (
            <div
              key={index}
              className="border border-light rounded-lg p-4 leading-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-warning"></span>
                  <p className="text-sm font-medium text-dark">
                    PYV200448791247
                  </p>
                </div>
                <p className="text-sm font-light text-dark">2025/11/24</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs font-regular text-dark/80">
                  Хүргэлтэнд гарсан
                </p>
                <p className="text-sm font-medium text-dark">4'000₮</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
