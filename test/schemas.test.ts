import { Schemas, translate, WIKIPEDIA } from "../src/index";

test("schema names", () => {
    const names = Schemas.names();
    expect(names).toEqual([
        "ala_lc",
        "ala_lc_alt",
        "bgn_pcgn",
        "bgn_pcgn_alt",
        "bs_2979",
        "bs_2979_alt",
        "gost_16876",
        "gost_16876_alt",
        "gost_52290",
        "gost_52535",
        "gost_7034",
        "gost_779",
        "gost_779_alt",
        "icao_doc_9303",
        "iso_9_1954",
        "iso_9_1968",
        "iso_9_1968_alt",
        "mosmetro",
        "mvd_310",
        "mvd_310_fr",
        "mvd_782",
        "scientific",
        "telegram",
        "ungegn_1987",
        "wikipedia",
        "yandex_maps",
        "yandex_money",
    ]);
});

test("get schema by name", () => {
    const schema = Schemas.get("wikipedia");
    expect(schema).toEqual(WIKIPEDIA);
});

test("schema not found", () => {
    expect(() => {
        Schemas.get("whatever");
    }).toThrowError("No such schema: whatever");
});

test("translate", () => {
    const schema = Schemas.get("wikipedia");
    const translated = translate("Юлия", schema);
    expect(translated).toBe("Yuliya");
});

test("translate", () => {
    const schema = Schemas.get("wikipedia");
    const translated = translate("Привет, (привет), человечество!", schema);
    expect(translated).toBe("Privet, (privet), chelovechestvo!");
});

function samples(): Array<[string, number, string, string]> {
    const samples: Array<[string, number, string, string]> = [];
    for (const schema of Schemas.values()) {
        let idx = 1;
        for (const sample of schema.samples) {
            const source = sample[0];
            const expected = sample[1];
            samples.push([schema.name, idx++, source, expected]);
        }
    }
    return samples;
}

test.each(samples())("%s %d: %s", (name, idx, source, expected) => {
    const schema = Schemas.get(name);
    expect(translate(source, schema)).toBe(expected);
});
