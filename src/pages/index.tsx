import * as React from "react";

const IndexPage = () => {
    return(
        <main className="bg-black h-screen w-full fixed">
            <h1 className="font-display text-white text-7xl text-center m-8">HOI4 Production Manager</h1>
            <div className="flex justify-center flex-row">
                <a href="/#" className="p-4 m-2 border-2 bg-gray-900 border-gray-200">
                    <p className="font-display text-white">Log In or Create Account</p>
                </a>
                <a href="/app" className="p-4 m-2 border-2 bg-gray-900 border-gray-200">
                    <p className="font-display text-white">Use as Guest</p>
                </a>
            </div>
        </main>
    );
};

export default IndexPage;
