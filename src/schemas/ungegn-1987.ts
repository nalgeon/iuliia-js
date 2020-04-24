/**
 * UNGEGN 1987 V/18 transliteration schema.
 * https://dangry.ru/iuliia/ungegn-1987/
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
        ["щ", "šč"],
        ["ъ", "ʺ"],
        ["ы", "y"],
        ["ь", "ʹ"],
        ["э", "è"],
        ["ю", "ju"],
        ["я", "ja"],
    ]),
]);

export const UNGEGN_1987 = new Schema(MAPPING);
