import React from 'react';

const MainPanel = (props: any) => {
    const setMessage = () => {
        if (!props.displayMessage) {
            document.getElementById('tagMessage')?.setAttribute('disabled', '')
        }
    };
    setMessage();
    return(
        <main className="bg-gray-900 w-full h-screen fixed mt-10 border-2 border-gray-100">
            <p id="tagMessage" className="font-body text-white text-2xl text-center">Add a tag to get started...</p>
        </main>
    )
};
export default MainPanel;