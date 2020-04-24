import { Schema } from "../schema";
import { YANDEX_MONEY } from "./yandex-money";

export class Schemas {
    private static all = new Map([["yandex_money", YANDEX_MONEY]]);

    public static names(): Array<string> {
        return Array.from(this.all.keys());
    }

    public static get(name: string): Schema | undefined {
        return this.all.get(name);
    }
}
