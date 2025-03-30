interface Props {
  size?: string;
  height?: number;
}
export const SpinnerIcon = () => {
  return (
    <svg
      role="status"
      className={`h-6 w-6 mr-2  animate-spin fill-[#00A660] text-gray-200 `}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0
      50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895
      27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013
      9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452
      15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843
       41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855
       51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175
       28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
};
export const UserIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "18"}
      height={size || "18"}
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 19c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C1 16.907 1 17.604 1 19M13.5 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      ></path>
    </svg>
  );
};
export const User2Icon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "22"}
      height={size || "22"}
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 20.817C3.603 21 4.416 21 5.8 21h10.4c1.384 0 2.197 0 2.8-.183m-16 0a2 2 0 0 1-.362-.144 3 3 0 0 1-1.311-1.311C1 18.72 1 17.88 1 16.2V5.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C3.28 1 4.12 1 5.8 1h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 3.28 21 4.12 21 5.8v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311 2 2 0 0 1-.362.144m-16 0c0-.809.005-1.237.077-1.597a4 4 0 0 1 3.143-3.143C6.606 16 7.07 16 8 16h6c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.072.36.077.788.077 1.597M15 8.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      ></path>
    </svg>
  );
};
export const EmailIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "22"}
      height={size || "18"}
      fill="none"
      viewBox="0 0 22 18"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 4 8.165 5.715c.661.463.992.695 1.351.784a2 2 0 0 0 .968 0c.36-.09.69-.32 1.351-.784L21 4M5.8 17h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 14.72 21 13.88 21 12.2V5.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 1 17.88 1 16.2 1H5.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C1 3.28 1 4.12 1 5.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C3.28 17 4.12 17 5.8 17"
      ></path>
    </svg>
  );
};
export const UserEditIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "22"}
      height={size || "20"}
      fill="none"
      viewBox="0 0 22 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 13.5H6.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C1 16.907 1 17.604 1 19M13.5 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M10 19l3.101-.886c.149-.043.223-.064.292-.096a1 1 0 0 0 .175-.102c.061-.045.116-.1.225-.21l6.457-6.456a1.768 1.768 0 1 0-2.5-2.5l-6.457 6.457c-.11.11-.164.164-.209.225a1 1 0 0 0-.102.175 2 2 0 0 0-.096.292z"
      ></path>
    </svg>
  );
};
export const LoginIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "22"}
      height={size || "20"}
      fill="none"
      viewBox="0 0 22 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m18 19 3-3m0 0-3-3m3 3h-6m-4-2.5H6.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C1 16.907 1 17.604 1 19M13.5 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"
      ></path>
    </svg>
  );
};
export const WareHouseIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "20"}
      height={size || "20"}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 19v-5.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.24 12 11.96 12 11.4 12H8.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C7 12.76 7 13.04 7 13.6V19M1 5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 1 0 6 0M4.2 19h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 17.48 19 16.92 19 15.8V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 1 16.92 1 15.8 1H4.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C1 2.52 1 3.08 1 4.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C2.52 19 3.08 19 4.2 19"
      ></path>
    </svg>
  );
};

export const HomeIcon = ({ size }: Props) => {
  return (
    <svg
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.982 2.764c-.351-.273-.527-.41-.72-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.721.462L4.235 8.039c-.453.353-.68.53-.843.75a2 
      2 0 0 0-.318.65C3 9.704 3 9.991 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h2c.28 0 .42 
      0 .527-.055a.5.5 0 0 0 .218-.218C9 20.62 9 20.48 9 20.2v-6.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 12 10.04 12 10.6 
      12h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 12.76 15 13.04 15 13.6v6.6c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055h2c1.12 
      0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.574 0-.861-.074-1.126a2 2 0 0 0-.318-.65c-.163-.22-.39-.397-.843-.75z"
      ></path>
    </svg>
  );
};
export const JobIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "22"}
      height={size || "20"}
      fill="none"
      viewBox="0 0 22 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 19V5c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C9.605 1 10.07 1 11 1s1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C15 3.605 15 4.07 15 5v6.5m0 4V19m-9.2 0h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 16.72 21 15.88 21 14.2V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 5 17.88 5 16.2 5H5.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C1 7.28 1 8.12 1 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C3.28 19 4.12 19 5.8 19m6-3.5h4.9c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218c.055-.107.055-.247.055-.527v-2.4c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218c-.107-.055-.247-.055-.527-.055h-4.9c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218C11 11.88 11 12.02 11 12.3v2.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055"
      ></path>
    </svg>
  );
};
export const AddressIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "22"}
      height={size || "22"}
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m8 17-7 4V5l7-4m0 16 7 4m-7-4V1m7 20 6-4V1l-6 4m0 16V5m0 0L8 1"
      ></path>
    </svg>
  );
};
export const ZipCodeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 1.458A10 10 0 0 0 11 1C5.477 1 1 5.477 1 11s4.477 10 10 10 10-4.477 10-10c0-1.715-.432-3.33-1.193-4.74M16 4.75h.005M9.5 20.888v-2.203a.5.5 0 0 1 .12-.325l2.486-2.9a.5.5 0 0 0-.131-.76l-2.856-1.632a.5.5 0 0 1-.187-.187L7.07 9.62a.5.5 0 0 0-.478-.25l-5.528.492M20 5c0 2.21-2 4-4 6-2-2-4-3.79-4-6a4 4 0 0 1 8 0m-3.75-.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"
      ></path>
    </svg>
  );
};
export const BoxIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "20"}
      height={size || "20"}
      fill="none"
      viewBox="0 0 20 22"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.5 6.278 10 11m0 0L1.5 6.278M10 11v9.5m9-5.441V6.94c0-.342 0-.514-.05-.666a1 1 0 0 0-.215-.364c-.109-.119-.258-.202-.558-.368l-7.4-4.111c-.284-.158-.425-.237-.575-.268a1 1 0 0 0-.403 0c-.15.031-.292.11-.576.268l-7.4 4.11c-.3.167-.45.25-.558.369a1 1 0 0 0-.215.364C1 6.427 1 6.599 1 6.94v8.118c0 .342 0 .514.05.666a1 1 0 0 0 .215.364c.109.119.258.202.558.368l7.4 4.111c.284.158.425.237.576.267.132.028.27.028.402 0 .15-.03.292-.11.576-.267l7.4-4.11c.3-.167.45-.25.558-.369a1 1 0 0 0 .215-.364c.05-.152.05-.324.05-.666"
      ></path>
    </svg>
  );
};
export const AirIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M16.516 2.95a3.12 3.12 0 0 1 4.497 4.324L18.45 9.957a6 6 0 0 0-.225.245l-.006.02.006.036c.01.06.028.14.063.29l1.593 6.904.014.06c.053.227.116.494.095.767a1.8 1.8 0 0 1-.195.677c-.126.243-.322.437-.486.6l-.044.044-.367.367c-.258.258-.49.49-.696.661-.21.176-.488.37-.846.433a1.75 1.75 0 0 1-1.35-.318c-.291-.217-.453-.515-.563-.766-.107-.244-.21-.556-.326-.902l-1.44-4.32-2.135 2.136a6 6 0 0 0-.206.213l-.006.019v.031c.004.054.012.127.027.264l.17 1.525.005.053c.023.203.05.442.013.68a1.8 1.8 0 0 1-.207.59c-.12.21-.29.38-.435.524l-.038.038-.182.182-.022.021c-.199.2-.385.386-.552.526-.18.15-.406.31-.7.386a1.75 1.75 0 0 1-1.208-.12 1.8 1.8 0 0 1-.61-.515c-.137-.17-.283-.39-.439-.624L5.69 18.489l-.076-.11-.01-.007-.093-.062-2.195-1.463c-.235-.157-.453-.302-.624-.439a1.8 1.8 0 0 1-.516-.61 1.75 1.75 0 0 1-.12-1.208 1.8 1.8 0 0 1 .387-.7c.14-.167.326-.353.526-.552l.021-.022.182-.182.038-.038c.144-.145.314-.316.524-.435.182-.104.382-.173.59-.207.238-.038.477-.01.68.013l.053.006 1.525.169a6 6 0 0 0 .295.027l.019-.006.024-.02c.04-.037.091-.088.19-.186l2.135-2.135-4.32-1.44c-.346-.115-.658-.22-.902-.326-.251-.11-.55-.272-.766-.564a1.75 1.75 0 0 1-.319-1.35c.064-.357.258-.635.434-.845.17-.205.403-.438.66-.696q.014-.012.026-.025l.342-.342.043-.043c.164-.166.358-.36.6-.487.21-.11.441-.176.678-.195.273-.02.54.042.767.095l.06.014 6.878 1.587a6 6 0 0 0 .33.07l.022-.007.028-.025c.045-.041.103-.1.21-.212zm3.273 1.137a1.46 1.46 0 0 0-2.08.017l-2.5 2.581q-.02.023-.042.044c-.158.165-.346.36-.58.489a1.75 1.75 0 0 1-.722.213c-.267.019-.53-.043-.753-.095l-.06-.013-6.877-1.588a6 6 0 0 0-.335-.07l-.02.006-.028.024c-.047.041-.107.1-.219.213l-.342.342c-.29.29-.468.469-.584.608q-.058.073-.075.1.001.011.005.022c.02.011.054.03.112.055.166.073.404.153.795.284l5.56 1.853a.83.83 0 0 1 .324 1.374L8.283 13.63l-.038.037c-.144.145-.313.316-.524.435a1.8 1.8 0 0 1-.589.207c-.239.038-.478.01-.68-.012l-.054-.006-1.524-.17a6 6 0 0 0-.296-.027l-.018.006-.024.021a6 6 0 0 0-.19.185l-.182.182a9 9 0 0 0-.45.468 1 1 0 0 0-.054.07q0 .015.003.027.015.016.067.059c.107.085.263.19.532.37l2.17 1.446.018.013a1.75 1.75 0 0 1 .608.608l.013.018 1.446 2.17c.18.269.285.425.37.532a1 1 0 0 0 .059.067l.026.003a1 1 0 0 0 .07-.054c.106-.088.24-.221.469-.45l.182-.182a6 6 0 0 0 .206-.214l.006-.018-.001-.032a6 6 0 0 0-.026-.264l-.17-1.524-.006-.054c-.023-.202-.05-.441-.012-.68.033-.207.103-.407.207-.59.12-.21.29-.38.434-.523l.039-.038 3.084-3.085a.83.83 0 0 1 1.374.325l1.854 5.56c.13.39.21.628.283.794a1 1 0 0 0 .055.112l.022.005q.027-.016.1-.075c.139-.116.317-.294.608-.584l.342-.342a6 6 0 0 0 .237-.247l.006-.02-.006-.037a6 6 0 0 0-.064-.298l-1.594-6.904-.013-.059c-.052-.22-.113-.482-.094-.748.016-.231.078-.457.182-.664.12-.24.306-.433.463-.596l.041-.044 2.563-2.683a1.46 1.46 0 0 0-.024-2.04"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const CloseIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
    >
      <path
        d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 
        0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z"
      ></path>
    </svg>
  );
};

export const ReadMore = ({ size }: Props) => {
  return (
    <svg
      width={size ? size : 24}
      height={size ? size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const MoneyIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 9h19M10 3 8 9l4 11.5L16 9l-2-6m-1.386 17.263 8.959-10.75c.152-.183.227-.274.256-.376a.5.5 0 0 0 
      0-.274c-.029-.102-.104-.193-.256-.375l-4.334-5.2c-.088-.106-.132-.159-.186-.197a.5.5 0 0 0-.158-.074C16.831 
      3 16.763 3 16.625 3h-9.25c-.138 0-.207 0-.271.017a.5.5 0 0 0-.158.074 1 1 0 0 0-.186.197l-4.334 5.2c-.151.182-.227.273-.256.375a.5.5 0 0 
      0 0 .274c.029.102.105.193.256.375l8.959 10.75c.211.254.316.38.443.427a.5.5 0 0 0 .343 0c.127-.047.232-.173.443-.427"
      ></path>
    </svg>
  );
};
export const ArrowIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15 18-6-6 6-6"
      ></path>
    </svg>
  );
};
export const CalculateIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "20"}
      height={size || "20"}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m15.5 4.5-11 11m2-7v-4m-2 2h4m3 7h4M5.8 19h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 16.72 19 15.88 19 14.2V5.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C16.72 1 15.88 1 14.2 1H5.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C1 3.28 1 4.12 1 5.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C3.28 19 4.12 19 5.8 19"
      ></path>
    </svg>
  );
};
export const CarIcon = ({ size }: Props) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 14V4.2C15 3.0799 15 2.51984 14.782 2.09202C14.5903 1.71569 14.2843 1.40973 13.908 1.21799C13.4802 1 12.9201 1 11.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V10.8C1 11.9201 1 12.4802 1.21799 12.908C1.40973 13.2843 1.71569 13.5903 2.09202 13.782C2.51984 14 3.0799 14 4.2 14H15ZM15 14H19.4C19.9601 14 20.2401 14 20.454 13.891C20.6422 13.7951 20.7951 13.6422 20.891 13.454C21 13.2401 21 12.9601 21 12.4V9.66274C21 9.41815 21 9.29586 20.9724 9.18077C20.9479 9.07873 20.9075 8.98119 20.8526 8.89172C20.7908 8.7908 20.7043 8.70432 20.5314 8.53137L18.4686 6.46863C18.2957 6.29568 18.2092 6.2092 18.1083 6.14736C18.0188 6.09253 17.9213 6.05213 17.8192 6.02763C17.7041 6 17.5818 6 17.3373 6H15M8 16.5C8 17.8807 6.88071 19 5.5 19C4.11929 19 3 17.8807 3 16.5C3 15.1193 4.11929 14 5.5 14C6.88071 14 8 15.1193 8 16.5ZM19 16.5C19 17.8807 17.8807 19 16.5 19C15.1193 19 14 17.8807 14 16.5C14 15.1193 15.1193 14 16.5 14C17.8807 14 19 15.1193 19 16.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const ImportUserIcon = ({ size }: Props) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 19L15 16M15 16L18 13M15 16H21M11 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const CopyIcon = ({ size }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 1H12.6C14.8402 1 15.9603 1 16.816 1.43597C17.5686 1.81947 18.1805 2.43139 18.564 3.18404C19 4.03969 19 5.15979 19 7.4V14.5M4.2 19H12.3C13.4201 19 13.9802 19 14.408 18.782C14.7843 18.5903 15.0903 18.2843 15.282 17.908C15.5 17.4802 15.5 16.9201 15.5 15.8V7.7C15.5 6.57989 15.5 6.01984 15.282 5.59202C15.0903 5.21569 14.7843 4.90973 14.408 4.71799C13.9802 4.5 13.4201 4.5 12.3 4.5H4.2C3.0799 4.5 2.51984 4.5 2.09202 4.71799C1.71569 4.90973 1.40973 5.21569 1.21799 5.59202C1 6.01984 1 6.57989 1 7.7V15.8C1 16.9201 1 17.4802 1.21799 17.908C1.40973 18.2843 1.71569 18.5903 2.09202 18.782C2.51984 19 3.0799 19 4.2 19Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const PhoneIcon = ({ size }: Props) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4996 1L12.9996 4.5M12.9996 4.5L16.4996 8M12.9996 4.5H20.9996M10.2266 11.8631C9.02506 10.6615 8.07627 9.30285 7.38028 7.85323C7.32041 7.72854 7.29048 7.66619 7.26748 7.5873C7.18576 7.30695 7.24446 6.96269 7.41447 6.72526C7.46231 6.65845 7.51947 6.60129 7.63378 6.48698C7.98338 6.13737 8.15819 5.96257 8.27247 5.78679C8.70347 5.1239 8.70347 4.26932 8.27247 3.60643C8.15819 3.43065 7.98338 3.25585 7.63378 2.90624L7.43891 2.71137C6.90747 2.17993 6.64174 1.91421 6.35636 1.76987C5.7888 1.4828 5.11854 1.4828 4.55098 1.76987C4.2656 1.91421 3.99987 2.17993 3.46843 2.71137L3.3108 2.86901C2.78117 3.39863 2.51636 3.66344 2.31411 4.02348C2.08969 4.42298 1.92833 5.04347 1.9297 5.5017C1.93092 5.91464 2.01103 6.19687 2.17124 6.76131C3.03221 9.79471 4.65668 12.6571 7.04466 15.045C9.43264 17.433 12.295 19.0575 15.3284 19.9185C15.8928 20.0787 16.1751 20.1588 16.588 20.16C17.0462 20.1614 17.6667 20 18.0662 19.7756C18.4263 19.5733 18.6911 19.3085 19.2207 18.7789L19.3783 18.6213C19.9098 18.0898 20.1755 17.8241 20.3198 17.5387C20.6069 16.9712 20.6069 16.3009 20.3198 15.7333C20.1755 15.448 19.9098 15.1822 19.3783 14.6508L19.1835 14.4559C18.8339 14.1063 18.6591 13.9315 18.4833 13.8172C17.8204 13.3862 16.9658 13.3862 16.3029 13.8172C16.1271 13.9315 15.9523 14.1063 15.6027 14.4559C15.4884 14.5702 15.4313 14.6274 15.3644 14.6752C15.127 14.8453 14.7828 14.904 14.5024 14.8222C14.4235 14.7992 14.3612 14.7693 14.2365 14.7094C12.7869 14.0134 11.4282 13.0646 10.2266 11.8631Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const LocationIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "18"}
      height={size || "22"}
      fill="none"
      viewBox="0 0 18 22"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 21c4-4 8-7.582 8-12A8 8 0 1 0 1 9c0 4.418 4 8 8 12"
      ></path>
    </svg>
  );
};
export const PasswordIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.2 19c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 16.72 19 15.88 19 14.2V5.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C16.72 1 15.88 1 14.2 1H5.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C1 3.28 1 4.12 1 5.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C3.28 19 4.12 19 5.8 19z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.732 11.195c-.071-.212-.106-.318-.104-.404a.4.4 0 0 1 .056-.22c.04-.077.146-.176.36-.374a3 3 0 1 0-4.086 0c.212.198.319.297.358.374.042.08.054.129.056.22.002.086-.033.192-.104.404l-.917 2.752c-.119.356-.178.533-.142.675a.5.5 0 0 0 .216.3c.123.078.31.078.685.078h3.78c.375 0 .562 0 .685-.078a.5.5 0 0 0 .216-.3c.036-.142-.024-.32-.142-.675z"
      ></path>
    </svg>
  );
};
export const GeneralIcon = ({ size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "21"}
      height={size || "22"}
      fill="none"
      viewBox="0 0 21 22"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19.153 9.9-9.016 9.015a5.25 5.25 0 0 1-7.425-7.425l9.016-9.015a3.5 3.5 0 1 1 4.95 4.95l-8.662 8.662a1.75 1.75 0 1 1-2.475-2.475l7.601-7.602"
      ></path>
    </svg>
  );
};
