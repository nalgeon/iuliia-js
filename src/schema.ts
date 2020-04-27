/**
 * Transliteration schema base features.
 */
import { LetterMapping, PrevMapping, NextMapping, EndingMapping } from "./mapping";

/** Transliteration schema. Defines the way to translate individual letters. */
export class Schema {
    public name: string;
    public samples: string[][];

    private map: LetterMapping;
    private prevMap: PrevMapping;
    private nextMap: NextMapping;
    private endingMap: EndingMapping;

    constructor(
        name: string,
        mapping: Map<string, string>,
        prevMapping?: Map<string, string>,
        nextMapping?: Map<string, string>,
        endingMapping?: Map<string, string>,
        samples?: string[][]
    ) {
        this.name = name;
        this.map = new LetterMapping(mapping);
        this.prevMap = new PrevMapping(prevMapping || new Map());
        this.nextMap = new NextMapping(nextMapping || new Map());
        this.endingMap = new EndingMapping(endingMapping || new Map());
        this.samples = samples || [];
    }

    /**
     * Translate `curr` letter according to schema mappings.
     * `prev` and `next` are taken into consideration according to corresponding mappings.
     * @param prev previous letter
     * @param curr current letter
     * @param next next letter
     */
    public translateLetter(prev: string, curr: string, next: string) {
        let letter = this.prevMap.get(prev + curr);
        if (letter === undefined) {
            letter = this.nextMap.get(curr + next);
        }
        if (letter === undefined) {
            letter = this.map.get(curr, curr);
        }
        return letter;
    }

    /** Translate word ending according to schema mapping. */
    public translateEnding(ending: string) {
        return this.endingMap.get(ending);
    }

    public static load(definition: any) {
        return new Schema(
            definition.name,
            new Map<string, string>(Object.entries(definition.mapping)),
            new Map<string, string>(Object.entries(definition.prev_mapping || {})),
            new Map<string, string>(Object.entries(definition.next_mapping || {})),
            new Map<string, string>(Object.entries(definition.ending_mapping || {})),
            definition.samples
        );
    }
}
