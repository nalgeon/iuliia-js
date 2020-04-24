/**
 * ISO/R 9:1968 transliteration schema.
 * https://dangry.ru/iuliia/iso-9-1968/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "ë"],
        ["ж", "ž"],
        ["й", "j"],
        ["х", "h"],
        ["ц", "c"],
        ["ч", "č"],
        ["ш", "š"],
        ["щ", "šč"],
        ["ъ", "ʺ"],
        ["ы", "y"],
        ["ь", "ʹ"],
        ["э", "ė"],
        ["ю", "ju"],
        ["я", "ja"],
    ]),
]);

const ALT_MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "ë"],
        ["ж", "zh"],
        ["и", "y"],
        ["й", "ĭ"],
        ["х", "kh"],
        ["ц", "ts"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", "ʺ"],
        ["ы", "y"],
        ["ь", "ʹ"],
        ["э", "ė"],
        ["ю", "yu"],
        ["я", "ya"],
    ]),
]);

export const ISO_9_1968 = new Schema(MAPPING);
export const ISO_9_1968_ALT = new Schema(ALT_MAPPING);
