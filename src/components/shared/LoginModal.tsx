import React from "react";
import Modal from "./Modal";
import { BoxIcon } from "../assets/icons";
import { getFormatMoney } from "../utils/common";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import toast from "react-hot-toast";

interface Props {
  open: boolean;
  onClose: () => void;
}

const LoginModal = ({ open, onClose }: Props) => {
  const handleSubmit = () => {
    onClose()
    toast.success(`Сайн байна уу ${`USER`}`)
  };
  return (
    <Modal open={open} onClose={() => onClose()}>
      <div className="block xs:w-[310px] lg:w-[460px] px-4 py-5">
        <h1 className="text-base font-medium text-dark mb-3">Нэвтрэх</h1>
        <div className="flex-col flex space-y-3">
          <CustomInput
            placeholder="Утасны дугаар"
            onChange={() => console.info("object")}
            value={""}
          />
          <CustomInput
            placeholder="Нууц үг"
            onChange={() => console.info("object")}
            value={""}
          />
          <CustomButton
            loading={false}
            onClick={() => handleSubmit()}
            title="Нэвтрэх"
          />
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
