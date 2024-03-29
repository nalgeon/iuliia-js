import { TransliterationSchema } from "./TransliterationSchema";

export default {
    name: "scientific",
    description: "Scientific transliteration schema",
    url: "https://iuliia.ru/scientific/",
    mapping: {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "ё",
        ж: "ž",
        з: "z",
        и: "i",
        й: "j",
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
        х: "x",
        ц: "c",
        ч: "č",
        ш: "š",
        щ: "šč",
        ъ: "ʺ",
        ы: "y",
        ь: "ʹ",
        э: "è",
        ю: "ju",
        я: "ja",
    },
    prev_mapping: null,
    next_mapping: null,
    ending_mapping: null,
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Julija, sʺešʹ eščё ètix mjagkix francuzskix bulok iz Joškar-Oly, da vypej altajskogo čaju",
        ],
    ],
} as TransliterationSchema;
