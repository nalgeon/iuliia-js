/**
 * Translate engine.
 */

import { Schema } from "./schema";

// JS lacks unicode support for word boundary (\b),
// so we have to emulate it
const SPLITTER = /([^\s,.:;?!()"']+)|([\s,.:;?!()"'])+/g;

/**
 * Translate source Cyrillic string into Latin using specified schema.
 * Translates sentences word by word, delegating specifics of transliteration
 * to specified schema.
 */
export function translate(source: string, schema: Schema) {
    const translated = splitSentence(source).map((word) => translateWord(word, schema));
    return translated.join("");
}

export function splitSentence(source: string) {
    return [...source.matchAll(/.+/g)].map(y=>y[0])
}

function translateWord(word: string, schema: Schema) {
    const [stem, ending] = splitWord(word);
    const translatedEnding = ending ? schema.translateEnding(ending) : undefined;
    let translated;
    if (translatedEnding) {
        translated = translateLetters(stem, schema);
        translated.push(translatedEnding);
    } else {
        translated = translateLetters(word, schema);
    }
    return translated.join("");
}

function translateLetters(word: string, schema: Schema) {
    const translated = [];
    for (const [prev, curr, next] of letterReader(word)) {
        const letter = schema.translateLetter(prev, curr, next);
        translated.push(letter);
    }
    return translated;
}

function splitWord(word: string) {
    const endingLength = 2;
    let stem;
    let ending;
    if (word.length > endingLength) {
        const pivotIdx = word.length - endingLength;
        stem = word.substr(0, pivotIdx);
        ending = word.substr(pivotIdx);
    } else {
        stem = word;
        ending = "";
    }
    return [stem, ending];
}

function* letterReader(stem: string) {
    let prev = "";
    let curr = "";
    let next = "";
    for (let idx = 0; idx < stem.length; idx++) {
        if (curr !== "") {
            prev = curr;
        }
        curr = next || stem[idx];
        if (idx < stem.length - 1) {
            next = stem[idx + 1];
        } else {
            next = "";
        }
        yield [prev, curr, next];
    }
}
