/**
 * Yandex.Maps transliteration schema.
 * https://dangry.ru/iuliia/yandex-maps/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map([
        ["ё", "yo"],
        ["ж", "zh"],
        ["й", "y"],
        ["х", "kh"],
        ["ц", "ts"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "sch"],
        ["ъ", ""],
        ["ы", "y"],
        ["ь", ""],
        ["э", "e"],
        ["ю", "yu"],
        ["я", "ya"],
    ]),
]);

const NEXT_MAPPING = new Map<string, string>([["ъе", "y"]]);

const ENDING_MAPPING = new Map<string, string>([["ый", "iy"]]);

export const YANDEX_MAPS = new Schema(MAPPING, undefined, NEXT_MAPPING, ENDING_MAPPING);
