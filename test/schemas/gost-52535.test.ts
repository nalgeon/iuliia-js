import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Iuliia, sesh eshche etikh miagkikh frantcuzskikh bulok iz Ioshkar-Oly, da vypei altaiskogo chaiu",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.GOST_52535)).toBe(expected);
});
