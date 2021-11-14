import React, { useState } from "react";
import Store from "../store/Store";
import MainPanel from "../components/MainPanel";
import TagTabBar from "../components/TagTabBar";

const App = () => {
    const [tags, setTags] = useState([]);
    const [tagDropdown, setTagDropdown] = useState(false);
    const store = new Store(true);
    const toggleDropdown = () => {
        const dropDownContainer = document.getElementById(
            "tagDropdownContainer"
        );
        if (tagDropdown) {
            dropDownContainer?.classList.add("max-h-0", "overflow-hidden");
            dropDownContainer?.classList.remove(
                "max-h-full",
                "overflow-auto",
                "border-2"
            );
            setTagDropdown(false);
        } else {
            dropDownContainer?.classList.remove("max-h-0", "overflow-hidden");
            dropDownContainer?.classList.add(
                "max-h-full",
                "overflow-auto",
                "border-2"
            );
            setTagDropdown(true);
        }
    };
    return (
        <div id="root" className="bg-black h-screen w-full fixed">
            <h1 className="font-display text-white text-4xl text-center m-8">
                HOI4 Production Manager
            </h1>
            <TagTabBar toggleDropdown={toggleDropdown} />
            <MainPanel store={store} displayMessage={tags.length === 0} />
        </div>
    );
};

export default App;
