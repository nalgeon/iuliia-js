/**
 * GOST R 52535.1-2006 transliteration schema.
 * http://localhost:3000/iuliia/gost-52535/
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
        ["ц", "tc"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", ""],
        ["ы", "y"],
        ["ь", ""],
        ["э", "e"],
        ["ю", "iu"],
        ["я", "ia"],
    ]),
]);

export const GOST_52535 = new Schema(MAPPING);
