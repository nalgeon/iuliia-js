import { Mapping, LetterMapping, PrevMapping, NextMapping, EndingMapping } from "../src/mapping";

const map = new Map([
    ["a", "x"],
    ["b", "yy"],
]);

test("mapping value", () => {
    const mapping = new Mapping(map);
    expect(mapping.valueOf()).toEqual(map);
});

test("get mapped letter", () => {
    const mapping = new Mapping(map);
    expect(mapping.get("a")).toEqual("x");
    expect(mapping.get("b")).toEqual("yy");
    expect(mapping.get("c")).toBeUndefined();
    expect(mapping.get("c", "d")).toEqual("d");
});

test("mapping for individual letter", () => {
    const mapping = new LetterMapping(map);
    expect(mapping.valueOf()).toEqual(
        new Map([
            ["a", "x"],
            ["A", "X"],
            ["b", "yy"],
            ["B", "Yy"],
        ])
    );
});

test("mapping with respect to prev letter", () => {
    const mapping = new PrevMapping(
        new Map([
            ["ax", "xx"],
            ["bx", "xxx"],
        ])
    );
    expect(mapping.valueOf()).toEqual(
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

test("mapping with respect to next letter", () => {
    const mapping = new NextMapping(
        new Map([
            ["xa", "xx"],
            ["xb", "xxx"],
        ])
    );
    expect(mapping.valueOf()).toEqual(
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

test("mapping for word ending", () => {
    const mapping = new EndingMapping(
        new Map([
            ["aa", "xx"],
            ["bb", "yy"],
        ])
    );
    expect(mapping.valueOf()).toEqual(
        new Map([
            ["aa", "xx"],
            ["AA", "XX"],
            ["bb", "yy"],
            ["BB", "YY"],
        ])
    );
});
