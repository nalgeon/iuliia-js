/**
 * British Standard 2979:1958 transliteration schema.
 * https://dangry.ru/iuliia/bs-2979/
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
        ["ц", "ts"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", "ʺ"],
        // This schema defines two alternative translations for `Ы`:
        //   - `Ы` → `Ȳ` (used by the Oxford University Press)
        //   - `Ы` → `UI` (used by the British Library).
        // `iuliia` uses `Ы` → `Ȳ`.
        ["ы", "ȳ"],
        ["ь", "ʹ"],
        ["э", "é"],
        ["ю", "yu"],
        ["я", "ya"],
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
        ["ю", "yu"],
        ["я", "ya"],
    ]),
]);

const ENDING_MAPPING = new Map<string, string>([
    ["ий", "y"],
    ["ый", "y"],
]);

export const BS_2979 = new Schema(MAPPING, undefined, undefined, ENDING_MAPPING);
export const BS_2979_ALT = new Schema(ALT_MAPPING, undefined, undefined, ENDING_MAPPING);
