import { translate, splitSentence } from "../src/engine";
import { Schema } from "../src/schema";

test("translate without schema", () => {
    const schema = new Schema("test", new Map());
    expect(translate("Iuliia", schema)).toBe("Iuliia");
});

test("translate according to schema", () => {
    const schema = new Schema(
        "test",
        new Map([
            ["a", "1"],
            ["i", "2"],
            ["l", "3"],
            ["u", "4"],
        ])
    );
    expect(translate("Iuliia", schema)).toBe("243221");
});

test("translate with respect to prev letter", () => {
    const schema = new Schema("test", new Map(), new Map([["li", ""]]));
    expect(translate("Iuliia", schema)).toBe("Iulia");
});

test("translate with respect to next letter", () => {
    const schema = new Schema("test", new Map(), new Map(), new Map([["iu", "y"]]));
    expect(translate("Iuliia", schema)).toBe("Yuliia");
});

test("translate word ending", () => {
    const schema = new Schema("test", new Map(), new Map(), new Map(), new Map([["ia", "ya"]]));
    expect(translate("Iuliia", schema)).toBe("Iuliya");
});

test("translate short word", () => {
    const schema = new Schema("test", new Map());
    expect(translate("Iu", schema)).toBe("Iu");
});

test("translate empty word", () => {
    const schema = new Schema("test", new Map());
    expect(translate("", schema)).toBe("");
});

test("split sentence", () => {
    expect(splitSentence("Hello, mankind!")).toEqual(["Hello", ", ", "mankind", "!"]);
    expect(splitSentence("Привет, (привет), человечество!")).toEqual([
        "Привет",
        ", (",
        "привет",
        "), ",
        "человечество",
        "!",
    ]);
});
