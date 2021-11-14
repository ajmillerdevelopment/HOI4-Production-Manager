import React, { useState } from "react";
import VM from "../vm/VM";

const TagDropdown = () => {
    const tags = VM.store.tags.map((tag: any) => {
        if (!tag.active) {
            const url = `/images/flags/${tag.flagUrl}`;
            return (
                <button
                    className="flex flex-row w-full hover:bg-gray-600 p-4"
                    onClick={() => {
                        VM.addTag(tag.name);
                        VM.ui.toggleDropdown(true);
                    }}
                >
                    <img
                        className="flag-image border border-gray-200"
                        src={url}
                        alt=""
                    />
                    <p className="font-body ml-3 text-lg text-white font-bold">
                        {tag.longName}
                    </p>
                </button>
            );
        } else {
            return;
        }
    });
    return (
        <div
            id="tagDropdownContainer"
            className="border-2 fixed bg-gray-800 border-gray-100 w-80"
        >
            <button className="font-body w-full hover:bg-gray-600 p-3 text-center text-white">
                + Create a New Tag
            </button>
            {tags}
        </div>
    );
};
export default TagDropdown;
