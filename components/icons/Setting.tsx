import React from "react";

interface Props {
  className?: string;
}

const Setting = ({ className }: Props) => {
  return (
    <svg
      className={className && className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9251 16.175C23.9751 15.8 24.0001 15.4125 24.0001 15C24.0001 14.6 23.9751 14.2 23.9126 13.825L26.4501 11.85C26.5594 11.7599 26.6341 11.6346 26.6615 11.4956C26.6888 11.3566 26.6671 11.2123 26.6001 11.0875L24.2001 6.9375C24.1294 6.81196 24.0166 6.71547 23.8816 6.66514C23.7466 6.61481 23.5982 6.61387 23.4626 6.6625L20.4751 7.8625C19.8501 7.3875 19.1876 6.9875 18.4501 6.6875L18.0001 3.5125C17.9779 3.36942 17.9052 3.23901 17.7951 3.14497C17.685 3.05094 17.5449 2.9995 17.4001 3H12.6001C12.3001 3 12.0626 3.2125 12.0126 3.5125L11.5626 6.6875C10.8251 6.9875 10.1501 7.4 9.53758 7.8625L6.55008 6.6625C6.27508 6.5625 5.96258 6.6625 5.81258 6.9375L3.42508 11.0875C3.27508 11.35 3.32508 11.675 3.57508 11.85L6.11258 13.825C6.05008 14.2 6.00008 14.6125 6.00008 15C6.00008 15.3875 6.02508 15.8 6.08758 16.175L3.55008 18.15C3.44073 18.2401 3.36602 18.3654 3.33867 18.5044C3.31132 18.6435 3.33302 18.7877 3.40008 18.9125L5.80008 23.0625C5.95008 23.3375 6.26258 23.425 6.53758 23.3375L9.52508 22.1375C10.1501 22.6125 10.8126 23.0125 11.5501 23.3125L12.0001 26.4875C12.0626 26.7875 12.3001 27 12.6001 27H17.4001C17.7001 27 17.9501 26.7875 17.9876 26.4875L18.4376 23.3125C19.1751 23.0125 19.8501 22.6125 20.4626 22.1375L23.4501 23.3375C23.7251 23.4375 24.0376 23.3375 24.1876 23.0625L26.5876 18.9125C26.7376 18.6375 26.6751 18.325 26.4376 18.15L23.9251 16.175ZM15.0001 19.5C12.5251 19.5 10.5001 17.475 10.5001 15C10.5001 12.525 12.5251 10.5 15.0001 10.5C17.4751 10.5 19.5001 12.525 19.5001 15C19.5001 17.475 17.4751 19.5 15.0001 19.5Z"
        fill="black"
      />
    </svg>
  );
};

export default Setting;
