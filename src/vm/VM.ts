import Store from "../store/Store";

const vm = {
    store: new Store(true),
    addTag: (tagName: string) => {},
    ui: {
        toggleDropdown: (tagDropdown: boolean) => {
            console.log("toggle dropdown");
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
            } else {
                dropDownContainer?.classList.remove(
                    "max-h-0",
                    "overflow-hidden"
                );
                dropDownContainer?.classList.add(
                    "max-h-full",
                    "overflow-auto",
                    "border-2"
                );
            }
        },
    },
};

export default vm;
