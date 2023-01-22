import { peg } from "https://code4fukui.github.io/pegjs/packages/pegjs/lib/peg.js";

const program = await Deno.readTextFile("./test/test.py");

console.log("# source -----");
console.log(program);

const input = await Deno.readTextFile("./src/peg/python.pegjs");
const parser = peg.generate(input);

const result = parser.parse(program);

console.log("# result -----");
console.log(JSON.stringify(result, null, 2));
