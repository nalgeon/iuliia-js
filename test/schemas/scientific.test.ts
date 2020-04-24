import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Julija, sʺešʹ eščё ètix mjagkix francuzskix bulok iz Joškar-Oly, da vypej altajskogo čaju",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.SCIENTIFIC)).toBe(expected);
});
