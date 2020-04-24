import { translate } from "../src/engine";
import { Schema } from "../src/schema";

test("translate", () => {
    const schema = new Schema(new Map());
    expect(translate("Iuliia", schema)).toBe("Iuliia");
});

test("mapping", () => {
    const schema = new Schema(
        new Map([
            ["a", "1"],
            ["i", "2"],
            ["l", "3"],
            ["u", "4"],
        ])
    );
    expect(translate("Iuliia", schema)).toBe("243221");
});

test("prev_mapping", () => {
    const schema = new Schema(new Map(), new Map([["li", ""]]));
    expect(translate("Iuliia", schema)).toBe("Iulia");
});

test("next_mapping", () => {
    const schema = new Schema(new Map(), new Map(), new Map([["iu", "y"]]));
    expect(translate("Iuliia", schema)).toBe("Yuliia");
});

test("ending_mapping", () => {
    const schema = new Schema(new Map(), new Map(), new Map(), new Map([["ia", "ya"]]));
    expect(translate("Iuliia", schema)).toBe("Iuliya");
});

test("short_word", () => {
    const schema = new Schema(new Map());
    expect(translate("Iu", schema)).toBe("Iu");
});

test("empty_word", () => {
    const schema = new Schema(new Map());
    expect(translate("", schema)).toBe("");
});
