import React, { useState } from 'react';
import Store from '../store/Store';
import MainPanel from '../components/MainPanel';

const App = () => {
    const [tags, setTags] = useState(['test', 'best'])
    const store = new Store(true);
    return(
        <div id="root" className="bg-black h-screen w-full fixed">
            <h1 className="font-display text-white text-4xl text-center m-8">HOI4 Production Manager</h1>
            <MainPanel displayMessage={(tags.length > 0)}/>
        </div>
    )
};

export default App;