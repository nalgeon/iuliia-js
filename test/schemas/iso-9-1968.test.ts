import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Julija, sʺešʹ eščë ėtih mjagkih francuzskih bulok iz Joškar-Oly, da vypej altajskogo čaju",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.ISO_9_1968)).toBe(expected);
});

const altCases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Yulyya, sʺeshʹ eshchë ėtykh myagkykh frantsuzskykh bulok yz Ĭoshkar-Oly, da vypeĭ altaĭskogo chayu",
    ],
];

test.each(altCases)("alt %#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.ISO_9_1968_ALT)).toBe(expected);
});
