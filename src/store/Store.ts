import * as seed from "../helpers/seed.json";

class Store {
  constructor(useVanilla: boolean) {
    if (useVanilla) {
      this.tags = seed.tags;
      this.units = seed.units;
      this.equipments = seed.equipments;
    }
  }
  tags: object[] = [];
  units: object[] = [];
  templates: object[] = [];
  equipments: object[] = [];
}
export default Store;
