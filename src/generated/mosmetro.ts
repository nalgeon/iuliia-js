export default {
    name: "mosmetro",
    description: "Moscow Metro map transliteration schema",
    url: "https://iuliia.ru/mosmetro/",
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
    prev_mapping: { тц: "s", ьё: "o", ъё: "o" },
    next_mapping: {
        ьа: "y",
        ье: "y",
        ьё: "y",
        ьи: "y",
        ьо: "y",
        ьу: "y",
        ьэ: "y",
        ъа: "y",
        ъе: "y",
        ъё: "y",
        ъи: "y",
        ъо: "y",
        ъу: "y",
        ъэ: "y",
    },
    ending_mapping: { ий: "y", ый: "y" },
    samples: [
        [
            "Юлия, съешь ещё этих мягких французских булок из Йошкар-Олы, да выпей алтайского чаю",
            "Yuliya, syesh esche etikh myagkikh frantsuzskikh bulok iz Yoshkar-Oly, da vypey altayskogo chayu",
        ],
        ["Битцевский парк", "Bitsevsky park"],
        ["Верхние Лихоборы", "Verkhnie Likhobory"],
        ["Воробьёвы горы", "Vorobyovy gory"],
        ["Выхино", "Vykhino"],
        ["Зябликово", "Zyablikovo"],
        ["Измайловская", "Izmaylovskaya"],
        ["Кожуховская", "Kozhukhovskaya"],
        ["Крылатское", "Krylatskoe"],
        ["Марьина Роща", "Maryina Roscha"],
        ["Марьино", "Maryino"],
        ["Молодёжная", "Molodezhnaya"],
        ["Октябрьская", "Oktyabrskaya"],
        ["Ольховая", "Olkhovaya"],
        ["Парк Победы", "Park Pobedy"],
        ["Площадь Ильича", "Ploschad Ilyicha"],
        ["Площадь Революции", "Ploschad Revolyutsii"],
        ["Пятницкое шоссе", "Pyatnitskoe shosse"],
        ["Румянцево", "Rumyantsevo"],
        ["Саларьево", "Salaryevo"],
        ["Семёновская", "Semenovskaya"],
        ["Сходненская", "Skhodnenskaya"],
        ["Текстильщики", "Tekstilschiki"],
        ["Тёплый стан", "Teply stan"],
        ["Третьяковская", "Tretyakovskaya"],
        ["Тропарёво", "Troparevo"],
        ["Фонвизинская", "Fonvizinskaya"],
        ["Чистые пруды", "Chistye prudy"],
        ["Шоссе Энтузиастов", "Shosse Entuziastov"],
        ["Щёлковская", "Schelkovskaya"],
        ["Электрозаводская", "Elektrozavodskaya"],
        ["Юго-Западная", "Yugo-Zapadnaya"],
    ],
};
