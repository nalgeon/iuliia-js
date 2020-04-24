/**
 * GOST R 52290-2004 transliteration schema.
 * https://dangry.ru/iuliia/gost-52290/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "yo"],
        ["ж", "zh"],
        ["й", "y"],
        ["х", "kh"],
        ["ц", "ts"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", "'"],
        ["ы", "y"],
        ["ь", "'"],
        ["э", "e"],
        ["ю", "yu"],
        ["я", "ya"],
    ]),
]);

const PREV_MAPPING = new Map<string, string>([
    // е
    ["ае", "ye"],
    ["ее", "ye"],
    ["ёе", "ye"],
    ["ие", "ye"],
    ["ое", "ye"],
    ["уе", "ye"],
    ["ъе", "ye"],
    ["ые", "ye"],
    ["ье", "ye"],
    ["эе", "ye"],
    ["юе", "ye"],
    ["яе", "ye"],
    // ё
    ["бё", "ye"],
    ["вё", "ye"],
    ["гё", "ye"],
    ["дё", "ye"],
    ["зё", "ye"],
    ["кё", "ye"],
    ["лё", "ye"],
    ["мё", "ye"],
    ["нё", "ye"],
    ["пё", "ye"],
    ["рё", "ye"],
    ["сё", "ye"],
    ["тё", "ye"],
    ["фё", "ye"],
    ["хё", "ye"],
    ["цё", "ye"],
    ["жё", "e"],
    ["чё", "e"],
    ["шё", "e"],
    ["щё", "e"],
]);

const NEXT_MAPPING = new Map<string, string>([
    ["ъе", ""],
    ["ье", ""],
    ["ъё", ""],
    ["ьё", ""],
]);

export const GOST_52290 = new Schema(MAPPING, PREV_MAPPING, NEXT_MAPPING);