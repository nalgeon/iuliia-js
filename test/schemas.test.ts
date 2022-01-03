import iuliia from "../src/index";

test("schema names", () => {
    const names = iuliia.Schemas.names();
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
    const schema = iuliia.Schemas.get("wikipedia");
    expect(schema).toEqual(iuliia.WIKIPEDIA);
});

test("schema not found", () => {
    expect(() => {
        iuliia.Schemas.get("whatever");
    }).toThrowError("No such schema: whatever");
});

test("translate", () => {
    const schema = iuliia.Schemas.get("wikipedia");
    const translated = iuliia.translate("Юлия", schema);
    expect(translated).toBe("Yuliya");
});

test("translate", () => {
    const schema = iuliia.Schemas.get("wikipedia");
    const translated = iuliia.translate("Привет, (привет), человечество!", schema);
    expect(translated).toBe("Privet, (privet), chelovechestvo!");
});


function samples(): Array<[string, number, string, string]> {
    const samples: Array<[string, number, string, string]> = [];
    for (let schema of iuliia.Schemas.values()) {
        let idx = 1;
        for (let sample of schema.samples) {
            const source = sample[0];
            const expected = sample[1];
            samples.push([schema.name, idx++, source, expected]);
        }
    }
    return samples;
}

test.each(samples())("%s %d: %s", (name, idx, source, expected) => {
    const schema = iuliia.Schemas.get(name);
    expect(iuliia.translate(source, schema)).toBe(expected);
});
