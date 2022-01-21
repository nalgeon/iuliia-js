export default {
    name: "mvd_310_fr",
    description: "MVD 310-1997 transliteration schema",
    url: "https://iuliia.ru/mvd-310/",
    comments: [
        "This schema defines the following rule for the French mapping:",
        "> `С` between two vowels → `SS`",
        "There is no such rule in other schemas, and MVD-310 itself is deprecated,",
        "so I decided to ignore this specific rule for the sake of code simplicity.",
    ],
    mapping: {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "j",
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
        у: "ou",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "tch",
        ш: "ch",
        щ: "chtch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "iou",
        я: "ia",
    },
    prev_mapping: {
        ге: "ue",
        ги: "ui",
        гы: "uy",
        ье: "ie",
        кс: "x",
    },
    next_mapping: {
        кс: "",
    },
    ending_mapping: {
        ин: "ine",
    },
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Iouliia, sech echtche etikh miagkikh frantsouzskikh boulok iz Iochkar-Oly, da vypei altaiskogo tchaiou",
        ],
        ["Юлия Щеглова", "Iouliia Chtcheglova"],
        ["Гайа Васильева", "Gaia Vasilieva"],
        ["Андрей Видный", "Andrei Vidnyi"],
        ["Оксана Снегирёва", "Oxana Sneguireva"],
        ["Юрий Васин", "Iourii Vasine"],
    ],
};
