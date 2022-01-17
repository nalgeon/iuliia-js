/**
 * Transliteration mappings.
 */

export const BASE_MAPPING = new Map([
    ["а", "a"],
    ["б", "b"],
    ["в", "v"],
    ["г", "g"],
    ["д", "d"],
    ["е", "e"],
    ["з", "z"],
    ["и", "i"],
    ["к", "k"],
    ["л", "l"],
    ["м", "m"],
    ["н", "n"],
    ["о", "o"],
    ["п", "p"],
    ["р", "r"],
    ["с", "s"],
    ["т", "t"],
    ["у", "u"],
    ["ф", "f"],
]);

/** Letter map for transliteration schema. */
export class Mapping {
    protected map: Map<string, string>;

    constructor(mapping: Map<string, string>) {
        this.map = new Map(mapping);
    }

    public valueOf(): Map<string, string> {
        return this.map;
    }

    /**
     * Return mapped value for `key` if key is in the map, else `defaultValue`.
     */
    public get(key: string, defaultValue?: string): string | undefined {
        const value = this.map.get(key);
        return value !== undefined ? value : defaultValue;
    }
}

/** Mapping for individual letters. */
export class LetterMapping extends Mapping {
    constructor(mapping: Map<string, string>) {
        super(mapping);
        const upperMap = new Map<string, string>();
        for (const [key, value] of mapping) {
            upperMap.set(capitalize(key), capitalize(value));
        }
        this.map = new Map([...this.map, ...upperMap]);
    }
}

/** Mapping for letters with respect to previous sibling. */
export class PrevMapping extends Mapping {
    constructor(mapping: Map<string, string>) {
        super(mapping);
        const upperMap1 = new Map<string, string>();
        for (const [key, value] of mapping) {
            upperMap1.set(capitalize(key), value);
        }
        const upperMap2 = new Map<string, string>();
        for (const [key, value] of mapping) {
            upperMap2.set(key.toUpperCase(), capitalize(value));
        }
        this.map = new Map([...this.map, ...upperMap1, ...upperMap2]);
    }
}

/** Mapping for letters with respect to next sibling. */
export class NextMapping extends Mapping {
    constructor(mapping: Map<string, string>) {
        super(mapping);
        const upperMap1 = new Map<string, string>();
        for (const [key, value] of mapping) {
            upperMap1.set(capitalize(key), capitalize(value));
        }
        const upperMap2 = new Map<string, string>();
        for (const [key, value] of mapping) {
            upperMap2.set(key.toUpperCase(), capitalize(value));
        }
        this.map = new Map([...this.map, ...upperMap1, ...upperMap2]);
    }
}

/** Mapping for word endings. */
export class EndingMapping extends Mapping {
    constructor(mapping: Map<string, string>) {
        super(mapping);
        const upperMap = new Map<string, string>();
        for (const [key, value] of mapping) {
            upperMap.set(key.toUpperCase(), value.toUpperCase());
        }
        this.map = new Map([...this.map, ...upperMap]);
    }
}

/** Capitalize string */
function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
