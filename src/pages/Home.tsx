import React, { useState } from "react";
import CustomInput from "../components/shared/CustomInput";
import CustomButton from "../components/shared/CustomButton";
import {
  AirIcon,
  ArrowIcon,
  BoxIcon,
  CalculateIcon,
  WareHouseIcon,
} from "../components/assets/icons";
import CustomSelect from "../components/shared/CustomSelect";
import WarnModal from "../components/shared/WarnModal";
import toast from "react-hot-toast";

const Home = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleCheck = () => {
    toast.error(`Бүртгэлтэй бараа байхгүй байна.`);
    setVisible(true);
  };

  return (
    <>
      <div className="container xs:px-4 lg:px-0">
        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="xs:flex md:hidden lg:flex flex-col gap-6">
            <h1 className="grid gap-1">
              <span className="text-base font-medium text-primary">
                SkyLine cargo
              </span>
              <span className="xs:text-md md:text-xl leading-tight font-semibold text-black">
                Түргэн шуурхай найдвартай үйлчилгээг эрхэмлэнэ
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 bg-primary/20 rounded-full flex items-center justify-center">
                <span className={`stroke-2 stroke-primary`}>
                  <WareHouseIcon size="16" />
                </span>
              </div>
              <div className="h-11 w-11 bg-primary/20 rounded-full flex items-center justify-center">
                <span className={`stroke-2 stroke-primary`}>
                  <BoxIcon size="16" />
                </span>
              </div>
              <div className="h-11 w-11 bg-primary/20 rounded-full flex items-center justify-center">
                <span className={`text-primary`}>
                  <AirIcon size="16" />
                </span>
              </div>
              <div className="h-11 w-11 bg-primary/20 rounded-full flex items-center justify-center">
                <span className={`stroke-2 stroke-primary`}>
                  <WareHouseIcon size="16" />
                </span>
              </div>
            </div>
          </div>
          <div className="xs:hidden md:flex items-start justify-center w-full -mt-[50px]">
            <img className="h-[340px] full " src="./main_image.png" />
          </div>
          <div className="space-y-9">
            <div className="grid gap-6">
              <h2 className="grid gap-1">
                <span className="text-base font-medium text-primary">
                  Бараа хайх
                </span>
                <span className="text-sm leading-tight font-normal text-black">
                  Та захиалсан бараагаа утасны дугаар эсвэл трак кодоор хайх
                  боломжтой.
                </span>
              </h2>
              <div className="flex-col flex gap-4">
                <CustomSelect>
                  <option>Утасны дугаараар</option>
                  <option>Трак шодоор</option>
                </CustomSelect>
                <CustomInput
                  placeholder="Утасны дугаараа хайх"
                  onChange={() => console.info("object")}
                  value={""}
                />
                <CustomButton
                  title="Шалгах"
                  loading={false}
                  onClick={() => handleCheck()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#f8f8f8] py-12">
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            <div className="flex-col flex items-center justify-start aspect-[4/3] bg-white border border-light rounded-md p-6">
              <div className="flex items-center justify-between w-full">
                <span
                  className={`flex items-center stroke-primary transition-all hover:stroke-primary`}
                >
                  <CalculateIcon size="24" />
                </span>
                <div className="flex items-center justify-center rounded-lg h-9 w-9 bg-light/50 fill-white stroke-1 stroke-dark rotate-180">
                  <ArrowIcon size="22" />
                </div>
              </div>
              calculate
            </div>
            <div className="flex-col flex items-center justify-center aspect-[4/3] bg-white border border-light rounded-md">
              a
            </div>
            <div className="flex-col flex items-center justify-center aspect-[4/3] bg-white border border-light rounded-md">
              a
            </div>
            <div className="flex-col flex items-center justify-center aspect-[4/3] bg-white border border-light rounded-md">
              a
            </div>
          </div>
        </div>
      </div> */}

      <WarnModal onClose={() => setVisible(false)} open={visible} />
    </>
  );
};

export default Home;
