import React from "react";

const MainPanel = (props: any) => {
  const setMessage = () => {
    if (!props.displayMessage) {
      document.getElementById("tagMessage")?.setAttribute("hidden", "");
    }
  };
  setMessage();
  return (
    <main className="bg-gray-900 m-0 w-full h-screen fixed">
      <p id="tagMessage" className="font-body text-white text-2xl text-center">
        Add a tag to get started...
      </p>
    </main>
  );
};
export default MainPanel;
