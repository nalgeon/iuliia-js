import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        'Julija, s"ešʹ eščë ėtih mjagkih francuzskih bulok iz Joškar-Oly, da vypej altajskogo čaju',
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.ISO_9_1954)).toBe(expected);
});
