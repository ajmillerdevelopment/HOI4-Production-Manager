import React from 'react';
import Store from '../store/Store';

const App = () => {
    const store = new Store(true);
    const tagList = store.tags.map((tag: any) => {
        return<p className="text-white">{tag.longName}</p>
    })
    return(
        <div id="root" className="bg-black h-screen w-full fixed">
            <h1 className="font-display text-white text-4xl text-center m-8">HOI4 Production Manager</h1>
            {tagList}
            <main className="bg-gray-900 w-full h-screen fixed mt-10 border-2 border-gray-100"></main>

        </div>
    )
};

export default App;