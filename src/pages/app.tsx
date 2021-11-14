import React, { useState } from "react";
import Store from "../store/Store";
import MainPanel from "../components/MainPanel";
import TagTabBar from "../components/TagTabBar";
import VM from "../vm/VM";

const App = () => {
    const [tags, setTags] = useState([]);
    return (
        <div id="root" className="bg-black h-screen w-full fixed">
            <h1 className="font-display text-white text-4xl text-center m-8">
                HOI4 Production Manager
            </h1>
            <TagTabBar />
            <MainPanel />
        </div>
    );
};

export default App;
