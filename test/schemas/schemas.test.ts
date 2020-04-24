import iuliia from "../../src/index";

test("schema names", () => {
    const names = iuliia.Schemas.names();
    expect(names).toEqual(["yandex_money"]);
});

test("get schema by name", () => {
    const schema = iuliia.Schemas.get("yandex_money");
    expect(schema).toEqual(iuliia.YANDEX_MONEY);
});
