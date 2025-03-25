import React, { useState } from "react";
import CustomInput from "../components/shared/CustomInput";
import CustomButton from "../components/shared/CustomButton";
import { AirIcon, BoxIcon, WareHouseIcon } from "../components/assets/icons";
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
      <div className="container bg-white space-y-14 xs:px-4 lg:px-0">
        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative xs:hidden lg:block">
            <img
              className="w-full h-[448px] rounded-lg"
              src="./cargo_banner.jpg"
            />

            <div className="absolute bottom-0 w-full flex-none">
              <div
                style={{ backdropFilter: `blur(25px)` }}
                className="grid bg-white/80 text-black m-4 rounded-xl px-4 py-3.5"
              >
                <span className="font-regular text-sm">Утсаар холбогдох</span>
                <span className="font-semibold text-md">
                  Ажилтандтай холбогдох
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-9">
            <div className="flex-col flex gap-6">
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
      <WarnModal onClose={() => setVisible(false)} open={visible} />
    </>
  );
};

export default Home;
