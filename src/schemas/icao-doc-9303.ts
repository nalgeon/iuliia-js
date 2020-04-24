/**
 * ICAO DOC 9303 transliteration schema.
 * https://dangry.ru/iuliia/icao-doc-9303/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "e"],
        ["ж", "zh"],
        ["й", "i"],
        ["х", "kh"],
        ["ц", "ts"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", "ie"],
        ["ы", "y"],
        ["ь", ""],
        ["э", "e"],
        ["ю", "iu"],
        ["я", "ia"],
    ]),
]);

export const ICAO_DOC_9303 = new Schema(MAPPING);
