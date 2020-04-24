/**
 * ALA-LC transliteration schema.
 * https://dangry.ru/iuliia/ala-lc/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map([
        ["ё", "ё"],
        ["ж", "zh"],
        ["й", "ĭ"],
        ["х", "kh"],
        ["ц", "t͡s"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", "ʺ"],
        ["ы", "y"],
        ["ь", "ʹ"],
        ["э", "ė"],
        ["ю", "i͡u"],
        ["я", "i͡a"],
    ]),
]);

const ALT_MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map([
        ["ё", "e"],
        ["ж", "zh"],
        ["й", "i"],
        ["х", "kh"],
        ["ц", "ts"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", '"'],
        ["ы", "y"],
        ["ь", "'"],
        ["э", "e"],
        ["ю", "iu"],
        ["я", "ia"],
    ]),
]);

export const ALA_LC = new Schema(MAPPING);
export const ALA_LC_ALT = new Schema(ALT_MAPPING);
