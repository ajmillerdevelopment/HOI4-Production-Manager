import React from "react";

const TagDropdown = (props: any) => {
    const tags = props.tags.map((tag) => {
        const url = `/images/flags/${tag.flagUrl}`;
        return (
            <div className="flex flex-row m-4">
                <img className="flag-image" src={url} alt="" />
                <p className="font-body ml-3 text-lg text-white font-bold">
                    {tag.longName}
                </p>
            </div>
        );
    });
    return (
        <div
            id="tagDropdownContainer"
            className="border-2 bg-gray-800 border-gray-100 w-80"
        >
            <p className="font-body m-4 text-center text-white">
                + Create a New Tag
            </p>
            {tags}
        </div>
    );
};
export default TagDropdown;
