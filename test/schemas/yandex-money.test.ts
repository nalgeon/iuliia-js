import iuliia from "../../src/index";

const cases = [
    ["Юлия Щеглова", "Yuliya Scheglova"],
    ["Иван Брызгальский", "Ivan Bryzgalskii"],
    ["Ксения Стрый", "Kseniya Stryi"],
];

test.each(cases)("%#: %s", (source, expected) => {
    expect(iuliia.translate(source, iuliia.YANDEX_MONEY)).toBe(expected);
});
