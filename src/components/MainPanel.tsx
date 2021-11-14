import React from "react";
import vm from "../vm/VM";
import TagDropdown from "./TagDropdown";

const MainPanel = (props: any) => {
    const setMessage = () => {
        if (vm.store.activeTags.length < 1) {
            document.getElementById("tagMessage")?.setAttribute("hidden", "");
        }
    };
    setMessage();
    return (
        <main className="bg-gray-900 m-0 w-full h-screen fixed">
            <div className="bar fixed" />
            <TagDropdown selectTag={props.selectTag} />
            <p
                id="tagMessage"
                className="font-body text-white text-2xl text-center"
            >
                Choose a tag to get started...
            </p>
        </main>
    );
};
export default MainPanel;
