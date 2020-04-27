/**
 * Transliteration schema registry.
 */

import { Schema } from "./schema";
import DEFINITIONS from "./schemas/_definitions";

/**
 * All supported transliteration schemas.
 */
export class Schemas {
    private static _all: Map<string, Schema>;

    /**
     * Lazy-loaded schema map.
     */
    private static get all() {
        if (!this._all) {
            this._all = loadSchemas();
        }
        return this._all;
    }

    /**
     * Array of schema names.
     */
    public static names(): string[] {
        return Array.from(this.all.keys()).sort();
    }

    /**
     * Array of schemas.
     */
    public static values(): Schema[] {
        return Array.from(this.all.values());
    }

    /**
     * Get schema by name.
     */
    public static get(name: string): Schema {
        const schema = this.all.get(name);
        if (!schema) {
            throw new Error(`No such schema: ${name}`);
        }
        return schema;
    }
}

function loadSchemas() {
    const map = new Map<string, Schema>();
    for (const defn of DEFINITIONS) {
        const schema = Schema.load(defn);
        map.set(schema.name, schema);
    }
    return map;
}
