/**
 * MVD 310-1997 transliteration schema.
 * https://dangry.ru/iuliia/mvd-310/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const EN_MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "e"],
        ["ж", "zh"],
        ["й", "y"],
        ["х", "kh"],
        ["ц", "ts"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", '"'],
        ["ы", "y"],
        ["ь", "'"],
        ["э", "e"],
        ["ю", "yu"],
        ["я", "ya"],
    ]),
]);

const EN_PREV_MAPPING = new Map<string, string>([
    ["ье", "ye"],
    ["ъе", "ye"],
]);
const EN_NEXT_MAPPING = new Map<string, string>([
    ["ье", ""],
    ["ъе", ""],
]);

const FR_MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "e"],
        ["ж", "j"],
        ["й", "i"],
        ["у", "ou"],
        ["х", "kh"],
        ["ц", "ts"],
        ["ч", "tch"],
        ["ш", "ch"],
        ["щ", "chtch"],
        ["ъ", ""],
        ["ы", "y"],
        ["ь", ""],
        ["э", "e"],
        ["ю", "iou"],
        ["я", "ia"],
    ]),
]);

const FR_PREV_MAPPING = new Map<string, string>([
    ["ге", "ue"],
    ["ги", "ui"],
    ["гы", "uy"],
    ["ье", "ie"],
    ["кс", "x"],
]);
const FR_NEXT_MAPPING = new Map<string, string>([["кс", ""]]);
const FR_ENDING_MAPPING = new Map<string, string>([["ин", "ine"]]);

// This schema defines the following rule for the French mapping:
// > `С` between two vowels → `SS`
// There is no such rule in other schemas, and MVD-310 itself is deprecated,
// so I decided to ignore this specific rule for the sake of code simplicity.

export const MVD_310 = new Schema(EN_MAPPING, EN_PREV_MAPPING, EN_NEXT_MAPPING);
export const MVD_310_FR = new Schema(
    FR_MAPPING,
    FR_PREV_MAPPING,
    FR_NEXT_MAPPING,
    FR_ENDING_MAPPING
);
