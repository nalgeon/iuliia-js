import { TransliterationSchema } from "./TransliterationSchema";

export default {
    name: "yandex_money",
    description: "Yandex.Money transliteration schema",
    url: "https://iuliia.ru/yandex-money/",
    mapping: {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
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
        щ: "sch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
    },
    prev_mapping: null,
    next_mapping: null,
    ending_mapping: null,
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Yuliya, sesh esche etikh myagkikh frantsuzskikh bulok iz Ioshkar-Oly, da vypei altaiskogo chayu",
        ],
        ["Юлия Щеглова", "Yuliya Scheglova"],
        ["Иван Брызгальский", "Ivan Bryzgalskii"],
        ["Ксения Стрый", "Kseniya Stryi"],
    ],
} as TransliterationSchema;
