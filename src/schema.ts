/**
 * Transliteration schema base features.
 */
import { LetterMapping, PrevMapping, NextMapping, EndingMapping } from "./mapping";

/** Transliteration schema. Defines the way to translate individual letters. */
export class Schema {
    map: LetterMapping;
    prevMap: PrevMapping;
    nextMap: NextMapping;
    endingMap: EndingMapping;

    constructor(
        mapping: Map<string, string>,
        prevMapping?: Map<string, string>,
        nextMapping?: Map<string, string>,
        endingMapping?: Map<string, string>
    ) {
        this.map = new LetterMapping(mapping);
        this.prevMap = new PrevMapping(prevMapping || new Map());
        this.nextMap = new NextMapping(nextMapping || new Map());
        this.endingMap = new EndingMapping(endingMapping || new Map());
    }

    /**
     * Translate `curr` letter according to schema mappings.
     * `prev` and `next` are taken into consideration according to corresponding mappings.
     * @param prev previous letter
     * @param curr current letter
     * @param next the next letter
     */
    translateLetter(prev: string, curr: string, next: string) {
        let letter = this.prevMap.get(prev + curr);
        // console.log("prev get " + (prev + curr) + " = " + letter);
        if (letter === undefined) {
            letter = this.nextMap.get(curr + next);
            // console.log("next get " + (curr + next) + " = " + letter);
        }
        if (letter === undefined) {
            letter = this.map.get(curr, curr);
            // console.log("letter get " + curr + " = " + letter);
        }
        // console.log("return " + letter);
        return letter;
    }

    /** Translate word ending according to schema mapping. */
    translateEnding(ending: string) {
        return this.endingMap.get(ending);
    }
}
