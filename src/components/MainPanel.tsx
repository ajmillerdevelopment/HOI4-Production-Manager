import React from "react";
import TagDropdown from "./TagDropdown";

const MainPanel = (props: any) => {
    const setMessage = () => {
        if (!props.displayMessage) {
            document.getElementById("tagMessage")?.setAttribute("hidden", "");
        }
    };
    setMessage();
    return (
        <main className="bg-gray-900 m-0 w-full h-screen fixed">
            <div className="bar fixed" />
            <TagDropdown tags={props.store.tags} />
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
