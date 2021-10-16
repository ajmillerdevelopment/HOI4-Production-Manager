import Store from './Store';

it("tests Store instantiation", () => {
    const store = new Store(false);
    expect(store.tags).toBe([]);
    expect(store.units).toBe([]);
    expect(store.templates).toBe([]);
    expect(store.equipment).toBe([]);
});