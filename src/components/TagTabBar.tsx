import React from "react";
//@ts-ignore This works, not sure why TS throws error
import plusIcon from "../images/icons/plus.svg";

const TagTabBar = (props: any) => {
  return (
    <div className="my-0 mx-2 flex flex-row justify-items-start">
      <button className="font-body new-tag-button border-4 m-0 flex justify-center items-center bg-gray-800 hover:bg-gray-600 border-gray-100 text-6xl font-bold text-white">
        <img src={plusIcon} alt="Add New Tag Button" />
      </button>
    </div>
  );
};

export default TagTabBar;
