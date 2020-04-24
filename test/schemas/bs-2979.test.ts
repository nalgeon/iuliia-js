import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Yuliya, sʺeshʹ eshchё étikh myagkikh frantsuzskikh bulok iz Ĭoshkar-Olȳ, da vȳpeĭ altaĭskogo chayu",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.BS_2979)).toBe(expected);
});

const altCases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Yuliya, s\"esh' eshche etikh myagkikh frantsuzskikh bulok iz Ioshkar-Oly, da vypei altaiskogo chayu",
    ],
];

test.each(altCases)("alt %#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.BS_2979_ALT)).toBe(expected);
});
