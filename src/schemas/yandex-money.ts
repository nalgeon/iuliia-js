/**
 * Yandex.Money transliteration schema.
 * https://dangry.ru/iuliia/yandex-money/
 */

import { BASE_MAPPING } from "../mapping";
import { Schema } from "../schema";

const MAPPING = new Map<string, string>([
    ...BASE_MAPPING,
    ...new Map([
        ["ё", "e"],
        ["ж", "zh"],
        ["й", "i"],
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

export const YANDEX_MONEY = new Schema(MAPPING);
