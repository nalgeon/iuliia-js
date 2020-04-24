/**
 * GOST 7.79-2000 (aka ISO 9:1995) transliteration schema.
 * https://dangry.ru/iuliia/gost-779/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "ё"],
        ["ж", "ž"],
        ["й", "j"],
        ["х", "h"],
        ["ц", "c"],
        ["ч", "č"],
        ["ш", "š"],
        ["щ", "ŝ"],
        ["ъ", "ʺ"],
        ["ы", "y"],
        ["ь", "ʹ"],
        ["э", "è"],
        ["ю", "û"],
        ["я", "â"],
    ]),
]);

const ALT_MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "yo"],
        ["ж", "zh"],
        ["й", "j"],
        ["х", "x"],
        ["ц", "cz"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shh"],
        ["ъ", "``"],
        ["ы", "y`"],
        ["ь", "`"],
        ["э", "е`"],
        ["ю", "yu"],
        ["я", "ya"],
    ]),
]);

const ALT_NEXT_MAPPING = new Map<string, string>([
    ["це", "c"],
    ["ци", "c"],
    ["цй", "c"],
    ["цы", "c"],
]);

export const GOST_779 = new Schema(MAPPING);
export const GOST_779_ALT = new Schema(ALT_MAPPING, undefined, ALT_NEXT_MAPPING);
