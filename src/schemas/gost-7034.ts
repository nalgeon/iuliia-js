/**
 * GOST R 7.0.34-2014 transliteration schema.
 * http://localhost:3000/iuliia/gost-7034/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

// This schema defines alternatives for many letters, but does not specify when to use which.
// Therefore, `iuliia` uses the first of suggested translations for each such letter.
const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["е", "e"], // (ye)
        ["ё", "yo"], // (jo)
        ["ж", "zh"],
        ["й", "j"], // (i,y)
        ["х", "x"], // (kh)
        ["ц", "c"], // (tz,cz)
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shh"],
        ["ъ", "''"], // (empty)
        ["ы", "y"],
        ["ь", "'"], // (empty)
        ["э", "e"],
        ["ю", "yu"], // (ju)
        ["я", "ya"], // (ja)
    ]),
]);

export const GOST_7034 = new Schema(MAPPING);
