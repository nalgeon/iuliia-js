/**
 * Wikipedia transliteration schema.
 * https://dangry.ru/iuliia/wikipedia/
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
        ["щ", "shch"],
        ["ъ", ""],
        ["ы", "y"],
        ["ь", ""],
        ["э", "e"],
        ["ю", "yu"],
        ["я", "ya"],
    ]),
]);

const PREV_MAPPING = new Map<string, string>([
    ["е", "ye"],
    ["ае", "ye"],
    ["ие", "ye"],
    ["ое", "ye"],
    ["уе", "ye"],
    ["эе", "ye"],
    ["юе", "ye"],
    ["яе", "ye"],
    ["ье", "ye"],
    ["ъе", "ye"],
]);

const NEXT_MAPPING = new Map<string, string>([
    ["ъа", "y"],
    ["ъи", "y"],
    ["ъо", "y"],
    ["ъу", "y"],
    ["ъы", "y"],
    ["ъэ", "y"],
    ["ьа", "y"],
    ["ьи", "y"],
    ["ьо", "y"],
    ["ьу", "y"],
    ["ьы", "y"],
    ["ьэ", "y"],
]);

const ENDING_MAPPING = new Map<string, string>([
    ["ий", "y"],
    ["ый", "y"],
]);

export const WIKIPEDIA = new Schema(MAPPING, PREV_MAPPING, NEXT_MAPPING, ENDING_MAPPING);
