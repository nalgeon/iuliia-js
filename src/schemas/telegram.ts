/**
 * Telegram transliteration schema.
 * https://dangry.ru/iuliia/telegram/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map<string, string>([
        ["ё", "e"],
        ["ж", "j"],
        ["й", "i"],
        ["х", "h"],
        ["ц", "c"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "sc"],
        ["ъ", ""],
        ["ы", "y"],
        ["ь", ""],
        ["э", "e"],
        ["ю", "iu"],
        ["я", "ia"],
    ]),
]);

export const TELEGRAM = new Schema(MAPPING);
