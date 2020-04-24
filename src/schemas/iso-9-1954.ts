/**
 * ISO/R 9:1954 transliteration schema.
 * https://dangry.ru/iuliia/iso-9-1954/
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
        ["ъ", '"'],
        ["ы", "y"],
        ["ь", "ʹ"],
        ["э", "ė"],
        ["ю", "ju"],
        ["я", "ja"],
    ]),
]);

export const ISO_9_1954 = new Schema(MAPPING);
