import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Ûliâ, sʺešʹ eŝё ètih mâgkih francuzskih bulok iz Joškar-Oly, da vypej altajskogo čaû",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.GOST_16876)).toBe(expected);
});

const altCases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Julija, s\"esh' eshhjo ehtikh mjagkikh francuzskikh bulok iz Jjoshkar-Oly, da vypejj altajjskogo chaju",
    ],
];

test.each(altCases)("alt %#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.GOST_16876_ALT)).toBe(expected);
});
