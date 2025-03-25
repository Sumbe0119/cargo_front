import React from "react";
import Modal from "./Modal";
import { BoxIcon } from "../assets/icons";
import { getFormatMoney } from "../utils/common";

interface Props {
  open: boolean;
  onClose: () => void;
}

const list = [
  {
    price: 2000,
    track_code: "TYD5457474532",
    state: "Эрээн агуулах",
  },
  {
    price: 2500,
    track_code: "TYD5457474532",
    state: "Эрээн агуулах",
  },
  {
    price: 7900,
    track_code: "TYD5457474532",
    state: "Ирсэн",
  },
  {
    price: 300,
    track_code: "TYD5457474532",
    state: "Гарсан",
  },
];

const ListModal = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={() => onClose()}>
      <div className="block w-[500px] p-8">
        <div className="flex-col flex divide-y divide-y-light ">
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between py-3"
              >
                <div className="flex gap-3">
                  <span className="stroke-primary">
                    <BoxIcon />
                  </span>
                  <div className="flex-col flex gap-1 leading-none">
                    <p className="text-black font-medium text-sm">
                      {item.track_code}
                    </p>
                    <span className="text-dark font-regular text-sm">
                      {getFormatMoney(item?.price)}
                    </span>
                  </div>
                </div>
                <div className="h-9 text-sm text-white bg-primary flex items-center justify-center px-3 rounded">
                  <p>{item?.state}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ListModal;
