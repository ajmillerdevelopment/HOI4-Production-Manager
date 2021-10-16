import * as seed from "../helpers/seed.json"

class Store {
    constructor(useVanilla: boolean) {
        if (useVanilla) {
            const tags = seed.tags;
            tags.forEach((tag) => {
                this.tags.push(tag)
            })
        }
    }
    tags: object[] = [];
    templates: object[] = [];
    equipment: object[] = [];
};
export default Store