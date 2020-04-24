import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "I͡ulii͡a, sʺeshʹ eshchё ėtikh mi͡agkikh frant͡suzskikh bulok iz Ĭoshkar-Oly, da vypeĭ altaĭskogo chai͡u",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.ALA_LC)).toBe(expected);
});

const altCases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Iuliia, s\"esh' eshche etikh miagkikh frantsuzskikh bulok iz Ioshkar-Oly, da vypei altaiskogo chaiu",
    ],
];

test.each(altCases)("alt %#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.ALA_LC_ALT)).toBe(expected);
});
