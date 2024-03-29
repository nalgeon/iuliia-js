import { TransliterationSchema } from "./TransliterationSchema";

export default {
    name: "gost_52290",
    description: "GOST R 52290-2004 transliteration schema",
    url: "https://iuliia.ru/gost-52290/",
    mapping: {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
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
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ъ: "'",
        ы: "y",
        ь: "'",
        э: "e",
        ю: "yu",
        я: "ya",
    },
    prev_mapping: {
        ае: "ye",
        ее: "ye",
        ёе: "ye",
        ие: "ye",
        ое: "ye",
        уе: "ye",
        ъе: "ye",
        ые: "ye",
        ье: "ye",
        эе: "ye",
        юе: "ye",
        яе: "ye",
        бё: "ye",
        вё: "ye",
        гё: "ye",
        дё: "ye",
        зё: "ye",
        кё: "ye",
        лё: "ye",
        мё: "ye",
        нё: "ye",
        пё: "ye",
        рё: "ye",
        сё: "ye",
        тё: "ye",
        фё: "ye",
        хё: "ye",
        цё: "ye",
        жё: "e",
        чё: "e",
        шё: "e",
        щё: "e",
    },
    next_mapping: { ъе: "", ье: "", ъё: "", ьё: "" },
    ending_mapping: null,
    samples: [
        [
            "Россия, город Йошкар-Ола, улица Яна Крастыня",
            "Rossiya, gorod Yoshkar-Ola, ulitsa Yana Krastynya",
        ],
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Yuliya, syesh' eshche etikh myagkikh frantsuzskikh bulok iz Yoshkar-Oly, da vypey altayskogo chayu",
        ],
        ["Ё Крё Мякоё", "Yo Krye Myakoyo"],
    ],
} as TransliterationSchema;
