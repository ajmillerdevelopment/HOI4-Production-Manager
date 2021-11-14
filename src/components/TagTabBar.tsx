import React from "react";
import VM from "../vm/VM";
//@ts-ignore This works, not sure why TS throws error
import plusIcon from "../images/icons/plus.svg";

const TagTabBar = (props: any) => {
    const tabs = VM.store?.activeTags.map((tag: any) => {
        const url = `/images/flags/${tag.flagUrl}`;
        return (
            <button className="border-4 border-gray-100 tag-button mx-1 flex justify-center items-center bg-gray-800 hover:bg-gray-600">
                <img src={url} alt={tag.longName} />
            </button>
        );
    });
    return (
        <div className="my-0 mx-2 flex flex-row justify-items-start">
            {tabs}
            <button
                onClick={() => VM.ui.toggleDropdown(false)}
                className="font-body new-tag-button border-4 m-0 mx-1 flex justify-center items-center bg-gray-800 hover:bg-gray-600 border-gray-100 text-6xl font-bold text-white"
            >
                <img src={plusIcon} alt="Add New Tag Button" />
            </button>
        </div>
    );
};

export default TagTabBar;
