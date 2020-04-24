/**
 * GOST 16876-71 (aka GOST 1983) transliteration schema.
 * https://dangry.ru/iuliia/gost-16876/
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
        ["ё", "jo"],
        ["ж", "zh"],
        ["й", "jj"],
        ["х", "kh"],
        ["ц", "c"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shh"],
        ["ъ", '"'],
        ["ы", "y"],
        ["ь", "'"],
        ["э", "eh"],
        ["ю", "ju"],
        ["я", "ja"],
    ]),
]);

export const GOST_16876 = new Schema(MAPPING);
export const GOST_16876_ALT = new Schema(ALT_MAPPING);
