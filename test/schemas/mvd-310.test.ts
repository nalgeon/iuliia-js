import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Yuliya, syesh' eshche etikh myagkikh frantsuzskikh bulok iz Yoshkar-Oly, da vypey altayskogo chayu",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.MVD_310)).toBe(expected);
});

const altCases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Iouliia, sech echtche etikh miagkikh frantsouzskikh boulok iz Iochkar-Oly, da vypei altaiskogo tchaiou",
    ],
];

test.each(altCases)("alt %#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.MVD_310_FR)).toBe(expected);
});
