# python-pegjs

PEG.js for Python

## Usage

```JavaScript
import { peg } from "https://code4fukui.github.io/pegjs/packages/pegjs/lib/peg.js";

const program = await Deno.readTextFile("https://code4fukui.github.io/pytho-pegjs/test/test.py");

console.log("# source -----");
console.log(program);

const input = await Deno.readTextFile("https://code4fukui.github.io/pytho-pegjs/src/peg/python.pegjs");
const parser = peg.generate(input);

const result = parser.parse(program);

console.log("# result -----");
console.log(JSON.stringify(result, null, 2));

```

## forked from

- [Kantouzin/python-pegjs: Python parser using PEG.js](https://github.com/Kantouzin/python-pegjs)
