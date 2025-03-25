import { useState } from "react";
import {
  ArrowIcon,
  BoxIcon,
  MoneyIcon,
  ReadMore,
  WareHouseIcon,
} from "../components/assets/icons";
import { getFormatMoney, getFormatYuan } from "../components/utils/common";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

const wareHouse = [
  {
    name: "Эрээн агуулах",
    id: 1,
  },
  {
    name: "Хэбэй муж Шижуяан хотын агуулах",
    id: 2,
  },
  {
    name: "Гуанжу агуулах",
    id: 3,
  },
];

const Calculate = () => {
  const [selectedPerson, setSelectedPerson] = useState(wareHouse[0]);
  return (
    <div className="container xs:py-8 grid gap-8">
      <div className="flex items-start justify-between">
        <h1 className="grid gap-1 leading-3">
          <span className="text-sm font-medium text-black">
            Сонгосогдсон агуулах
          </span>
          <span className="text-base leading-tight font-semibold text-primary">
            {selectedPerson.name}
          </span>
        </h1>
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <ListboxButton
            className={`flex items-center gap-2 h-11 border border-light rounded-xl px-3 leading-0 outline outline-1 
      -outline-offset-1 outline-dark/20 placeholder:text-dark focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary`}
          >
            {selectedPerson.name}
            <div
              className={`fill-white stroke-1 stroke-primary -rotate-90 pr-1`}
            >
              <ArrowIcon size="24" />
            </div>
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            className={`bg-white border border-light rounded mt-3 shadow-lg`}
          >
            {wareHouse.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="flex items-center justify-start h-8 w-full hover:bg-primary/10 cursor-pointer px-3 py-2"
              >
                <p className="text-sm text-dark hover:text-primary transition-all font-medium">{person.name}</p>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
      {/* <div
        className={`group/item grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xs:gap-3 lg:gap-6 cursor-pointer border-b border-b-light pb-6`}
      >
        {wareHouse.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={`border border-light rounded-xl hover:border-primary px-4 h-20 flex items-center justify-between`}
            >
              <div className={`grid`}>
                <div
                  className={`flex items-center gap-1 text-base font-semibold text-black leading-4`}
                >
                  {item?.title}
                </div>
                <div className={`text-dark font-regular text-sm`}>
                  Идэвхитэй
                </div>
              </div>
              <div
                className={`flex-none bg-light/50 group-hover/item:bg-primary/10 w-9 h-9 rounded-full flex items-center justify-center`}
              >
                <span
                  className={`stroke-2 stroke-black group-hover/item:stroke-primary`}
                >
                  <WareHouseIcon size="16" />
                </span>
              </div>
            </div>
          );
        })}
      </div> */}
      <div
        className={`group/item grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xs:gap-3 lg:gap-6 cursor-pointer`}
      >
        <div
          className={`border border-light rounded-xl hover:border-primary px-4 h-20 flex items-center justify-between`}
        >
          <div className={`grid`}>
            <div
              className={`flex items-center gap-1 text-base font-semibold text-black leading-4`}
            >
              1кг ачаа
            </div>
            <div className={`text-dark font-regular text-sm`}>
              {getFormatMoney(3000)}
            </div>
          </div>
          <div
            className={`flex-none bg-light/50 group-hover/item:bg-primary/10 w-9 h-9 rounded-full flex items-center justify-center`}
          >
            <span
              className={`stroke-2 stroke-black group-hover/item:stroke-primary`}
            >
              <BoxIcon size="16" />
            </span>
          </div>
        </div>
        <div
          className={`border border-light rounded-xl hover:border-primary px-4 h-20 flex items-center justify-between`}
        >
          <div className={`grid`}>
            <div
              className={`flex items-center gap-1 text-base font-semibold text-black leading-4`}
            >
              1м3-с доош ачаа
            </div>
            <div className={`text-dark font-regular text-sm`}>
              {" "}
              {getFormatMoney(3000)}
            </div>
          </div>
          <div
            className={`flex-none bg-light/50 group-hover/item:bg-primary/10 w-9 h-9 rounded-full flex items-center justify-center`}
          >
            <span
              className={`stroke-2 stroke-black group-hover/item:stroke-primary`}
            >
              <BoxIcon size="16" />
            </span>
          </div>
        </div>
        <div
          className={`border border-light rounded-xl hover:border-primary px-4 h-20 flex items-center justify-between`}
        >
          <div className={`grid`}>
            <div
              className={`flex items-center gap-1 text-base font-semibold text-black leading-4`}
            >
              1м3-с дээш ачаа
            </div>
            <div className={`text-dark font-regular text-sm`}>
              {getFormatYuan(600)}
            </div>
          </div>
          <div
            className={`flex-none bg-light/50 group-hover/item:bg-primary/10 w-9 h-9 rounded-full flex items-center justify-center`}
          >
            <span
              className={`stroke-2 stroke-black group-hover/item:stroke-primary`}
            >
              <BoxIcon size="16" />
            </span>
          </div>
        </div>
        <div
          className={`border border-light rounded-xl hover:border-primary px-4 h-20 flex items-center justify-between`}
        >
          <div className={`grid`}>
            <div
              className={`flex items-center gap-1 text-base font-semibold text-black leading-4`}
            >
              Нийт зардал
            </div>
            <div className={`text-primary font-medium text-sm`}>
              {getFormatMoney(16000)}
            </div>
          </div>
          <div
            className={`flex-none bg-light/50 group-hover/item:bg-primary/10 w-9 h-9 rounded-full flex items-center justify-center`}
          >
            <span className={`fill-transparent stroke-2 stroke-primary`}>
              <MoneyIcon size="16" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
