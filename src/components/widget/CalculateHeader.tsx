import React from "react";
import { getFormatMoney, getFormatYuan } from "../utils/common";
import { BoxIcon } from "../assets/icons";

interface Props {
  weightPrice: number;
  Above1m3: number;
  Below1m3: number;
  calculatePrice: any;
}
const CalculateHeader = ({
  Above1m3, // 1м3-ээс дээш үнэ
  Below1m3, // 1м3-ээс доош үнэ
  weightPrice, // жингийн үнэ
  calculatePrice,
}: Props) => {
  return (
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
            {getFormatMoney(weightPrice)}
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
            {getFormatMoney(Below1m3)}
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
            {getFormatYuan(Above1m3)}
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
        className={`bg-primary/10 rounded-xl hover:border-primary px-4 h-20 flex items-center justify-between`}
      >
        <div className={`grid`}>
          <div
            className={`flex items-center gap-1 text-base font-semibold text-primary leading-4`}
          >
            {/* {getFormatMoney(16000)} */}
            {calculatePrice}₮
          </div>
          <div className={`text-primary font-regular text-sm`}>Нийт зардал</div>
        </div>
      </div>
    </div>
  );
};

export default CalculateHeader;
