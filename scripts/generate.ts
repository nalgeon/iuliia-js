import execa from "execa";
import { readdir, access, readFile, writeFile } from "fs/promises";
import { join, resolve, basename } from "path";
import Ajv, { ValidateFunction } from "ajv";

const INPUT_DIR = resolve(join(__dirname, "..", ".data"));
const OUTPUT_DIR = resolve(join(__dirname, "..", "src/generated"));
const SOURCE_REPO = "https://github.com/nalgeon/iuliia";
const DEFINITIONS_FILE = join(OUTPUT_DIR, "_definitions.ts");

async function clone() {
    try {
        await access(join(INPUT_DIR, ".git"));
    } catch (e) {
        const { all: output } = await execa("git", ["clone", SOURCE_REPO, INPUT_DIR], {
            all: true,
        });
        console.log(output);
    }
}

async function jsonToTS(inputFile: string, v: ValidateFunction): Promise<string> {
    const input = await readFile(inputFile, "utf8");
    const data = JSON.parse(input);
    if (!v(data)) {
        console.error(`Validation failed for file ${inputFile}:`);
        console.error(v.errors);
        process.exit(1);
    }
    return `export default ${JSON.stringify(data)};`;
}

function createDefinitions(moduleNames: string[]): string {
    const imports = moduleNames.map((mod) => `import ${mod} from "./${mod}";`).join("\n");
    const defaultExport = `export default [${moduleNames.join(",")}]`;
    return `${imports}\n\n${defaultExport}`;
}

async function createValidator() {
    const ajv = new Ajv();
    return ajv.compile(JSON.parse(await readFile(join(INPUT_DIR, "schema.jsd"), "utf8")));
}

async function generate() {
    const validator = await createValidator();
    const jsonFiles = (await readdir(INPUT_DIR)).filter((file) => file.endsWith(".json"));

    for (const file of jsonFiles) {
        const inputFile = join(INPUT_DIR, file);
        const outputFile = join(OUTPUT_DIR, basename(file, ".json") + ".ts");
        console.log(`Writing file: ${inputFile}`);
        const output = await jsonToTS(inputFile, validator);
        await writeFile(outputFile, output, "utf8");
    }

    console.log(`Writing file: ${DEFINITIONS_FILE}`);
    const moduleNames = jsonFiles.map((file) => basename(file, ".json"));
    const definitions = createDefinitions(moduleNames);
    await writeFile(DEFINITIONS_FILE, definitions, "utf8");
}

(async () => {
    await clone();
    await generate();
})();
