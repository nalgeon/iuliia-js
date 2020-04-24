import { Mapping, LetterMapping, PrevMapping, NextMapping, EndingMapping } from "../src/mapping";

const map = new Map([
    ["a", "x"],
    ["b", "yy"],
]);

test("Mapping", () => {
    const mapping = new Mapping(map);
    expect(mapping.map).toEqual(map);
});

test("Mapping.get()", () => {
    const mapping = new Mapping(map);
    expect(mapping.get("a")).toEqual("x");
    expect(mapping.get("b")).toEqual("yy");
    expect(mapping.get("c")).toBeUndefined();
    expect(mapping.get("c", "d")).toEqual("d");
});

test("LetterMapping", () => {
    const mapping = new LetterMapping(map);
    expect(mapping.map).toEqual(
        new Map([
            ["a", "x"],
            ["A", "X"],
            ["b", "yy"],
            ["B", "Yy"],
        ])
    );
});

test("PrevMapping", () => {
    const mapping = new PrevMapping(
        new Map([
            ["ax", "xx"],
            ["bx", "xxx"],
        ])
    );
    expect(mapping.map).toEqual(
        new Map([
            ["ax", "xx"],
            ["Ax", "xx"],
            ["AX", "Xx"],
            ["bx", "xxx"],
            ["Bx", "xxx"],
            ["BX", "Xxx"],
        ])
    );
});

test("NextMapping", () => {
    const mapping = new NextMapping(
        new Map([
            ["xa", "xx"],
            ["xb", "xxx"],
        ])
    );
    expect(mapping.map).toEqual(
        new Map([
            ["xa", "xx"],
            ["Xa", "Xx"],
            ["XA", "Xx"],
            ["xb", "xxx"],
            ["Xb", "Xxx"],
            ["XB", "Xxx"],
        ])
    );
});

test("EndingMapping", () => {
    const mapping = new EndingMapping(
        new Map([
            ["aa", "xx"],
            ["bb", "yy"],
        ])
    );
    expect(mapping.map).toEqual(
        new Map([
            ["aa", "xx"],
            ["AA", "XX"],
            ["bb", "yy"],
            ["BB", "YY"],
        ])
    );
});
