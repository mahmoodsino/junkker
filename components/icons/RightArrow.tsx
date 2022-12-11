import React from "react";

interface Props {
  className?: string;
}

const RightArrow = ({ className }: Props) => {
  return (
    <svg
      className={className ? className : ""}
      width="36"
      height="40"
      viewBox="0 0 36 40"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5788 28.3334C15.2096 28.3334 14.8405 28.1701 14.5593 27.8451C13.9955 27.1934 13.9955 26.1401 14.5593 25.4884L19.325 19.9801L14.7396 14.4918C14.1873 13.8284 14.2032 12.7734 14.7756 12.1351C15.3495 11.4968 16.2623 11.5151 16.8145 12.1751L22.3833 18.8418C22.9298 19.4968 22.9226 20.5351 22.366 21.1784L16.5982 27.8451C16.3171 28.1701 15.9479 28.3334 15.5788 28.3334Z"
        fill="current"
      />
    </svg>
  );
};

export default RightArrow;
