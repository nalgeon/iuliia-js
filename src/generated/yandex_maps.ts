import { TransliterationSchema } from "./TransliterationSchema";

export default {
    name: "yandex_maps",
    description: "Yandex.Maps transliteration schema",
    url: "https://iuliia.ru/yandex-maps/",
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
        щ: "sch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
    },
    prev_mapping: { е: "ye", ае: "ye", ие: "ye", ое: "ye", уе: "ye", эе: "ye", юе: "ye", яе: "ye" },
    next_mapping: { ъе: "y" },
    ending_mapping: { ый: "iy" },
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Yuliya, syesh yeschyo etikh myagkikh frantsuzskikh bulok iz Yoshkar-Oly, da vypey altayskogo chayu",
        ],
        [
            "Россия, город Йошкар-Ола, улица Яна Крастыня",
            "Rossiya, gorod Yoshkar-Ola, ulitsa Yana Krastynya",
        ],
        ["Санкт-Петербург, Подъездной пер", "Sankt-Peterburg, Podyezdnoy per"],
        ["Москва, ул Подъёмная", "Moskva, ul Podyomnaya"],
        ["Астрахань, ул Подъяпольского", "Astrakhan, ul Podyapolskogo"],
        ["Щегловитовка", "Scheglovitovka"],
        ["Новый Уренгой", "Noviy Urengoy"],
        ["Елабуга", "Yelabuga"],
        ["Бабаево", "Babayevo"],
        ["Белово", "Belovo"],
    ],
} as TransliterationSchema;
