import iuliia from "../../src/index";

const cases = [
    [
        "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
        "Yuliya, s''esh' eshhyo etix myagkix francuzskix bulok iz Joshkar-Oly, da vypej altajskogo chayu",
    ],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.GOST_7034)).toBe(expected);
});
