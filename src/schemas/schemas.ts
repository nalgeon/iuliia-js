/**
 * Specific transliteration schemas.
 */

import { Schema } from "../schema";
import { ALA_LC, ALA_LC_ALT } from "./ala-lc";
import { BGN_PCGN, BGN_PCGN_ALT } from "./bgn-pcgn";
import { BS_2979, BS_2979_ALT } from "./bs-2979";
import { GOST_779, GOST_779_ALT } from "./gost-779";
import { GOST_7034 } from "./gost-7034";
import { GOST_16876, GOST_16876_ALT } from "./gost-16876";
import { GOST_52290 } from "./gost-52290";
import { GOST_52535 } from "./gost-52535";
import { ICAO_DOC_9303 } from "./icao-doc-9303";
import { ISO_9_1954 } from "./iso-9-1954";
import { ISO_9_1968, ISO_9_1968_ALT } from "./iso-9-1968";
import { MVD_310, MVD_310_FR } from "./mvd-310";
import { MVD_782 } from "./mvd-782";
import { SCIENTIFIC } from "./scientific";
import { TELEGRAM } from "./telegram";
import { UNGEGN_1987 } from "./ungegn-1987";
import { WIKIPEDIA } from "./wikipedia";
import { YANDEX_MAPS } from "./yandex-maps";
import { YANDEX_MONEY } from "./yandex-money";

/**
 * All supported transliteration schemas.
 */
export class Schemas {
    private static all = new Map([
        ["ala_lc", ALA_LC],
        ["ala_lc_alt", ALA_LC_ALT],
        ["bgn_pcgn", BGN_PCGN],
        ["bgn_pcgn_alt", BGN_PCGN_ALT],
        ["bs_2979", BS_2979],
        ["bs_2979_alt", BS_2979_ALT],
        ["gost_16876", GOST_16876],
        ["gost_16876_alt", GOST_16876_ALT],
        ["gost_52290", GOST_52290],
        ["gost_52535", GOST_52535],
        ["gost_7034", GOST_7034],
        ["gost_779", GOST_779],
        ["gost_779_alt", GOST_779_ALT],
        ["icao_doc_9303", ICAO_DOC_9303],
        ["iso_9_1954", ISO_9_1954],
        ["iso_9_1968", ISO_9_1968],
        ["iso_9_1968_alt", ISO_9_1968_ALT],
        ["mvd_310", MVD_310],
        ["mvd_310_fr", MVD_310_FR],
        ["mvd_782", MVD_782],
        ["scientific", SCIENTIFIC],
        ["telegram", TELEGRAM],
        ["ungegn_1987", UNGEGN_1987],
        ["wikipedia", WIKIPEDIA],
        ["yandex_money", YANDEX_MONEY],
        ["yandex_maps", YANDEX_MAPS],
    ]);

    private static readonly aliases = new Map([["iso_9", GOST_779]]);

    public static names(): string[] {
        return Array.from(this.all.keys()).sort();
    }

    public static get(name: string): Schema {
        const schema = this.all.get(name) || this.aliases.get(name);
        if (!schema) {
            throw new Error(`No such schema: ${name}`);
        }
        return schema;
    }
}
