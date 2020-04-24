/**
 * Scientific transliteration schema.
 * https://dangry.ru/iuliia/scientific/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "ё"],
        ["ж", "ž"],
        ["й", "j"],
        ["х", "x"],
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

export const SCIENTIFIC = new Schema(MAPPING);
