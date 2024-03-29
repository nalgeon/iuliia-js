import { TransliterationSchema } from "./TransliterationSchema";

export default {
    name: "gost_16876_alt",
    description: "GOST 16876-71 (aka GOST 1983) transliteration schema",
    url: "https://iuliia.ru/gost-16876/",
    mapping: {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "jo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "jj",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "shh",
        ъ: '"',
        ы: "y",
        ь: "'",
        э: "eh",
        ю: "ju",
        я: "ja",
    },
    prev_mapping: null,
    next_mapping: null,
    ending_mapping: null,
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Julija, s\"esh' eshhjo ehtikh mjagkikh francuzskikh bulok iz Jjoshkar-Oly, da vypejj altajjskogo chaju",
        ],
    ],
} as TransliterationSchema;
