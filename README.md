# python-pegjs

PEG.js for Python

## Usage

```JavaScript
import parser from "./src/peg/python.pegjs.js";

const program = await (await fetch("https://code4fukui.github.io/python-pegjs/test/test.py")).text();

console.log("# source -----");
console.log(program);

const result = parser.parse(program);

console.log("# result -----");
console.log(JSON.stringify(result, null, 2));
```

### Build

```sh
$ deno run -A https://code4fukui.github.io/pegjs/packages/pegjs/peg.js src/peg/python.pegjs
```

## From pegjs

```JavaScript
import { peg } from "https://code4fukui.github.io/pegjs/packages/pegjs/lib/peg.js";

const program = await (await fetch("https://code4fukui.github.io/python-pegjs/test/test.py")).text();

console.log("# source -----");
console.log(program);

const input = await (await fetch("https://code4fukui.github.io/python-pegjs/src/peg/python.pegjs")).text();
const parser = peg.generate(input);

const result = parser.parse(program);

console.log("# result -----");
console.log(JSON.stringify(result, null, 2));

```

## forked from

- [Kantouzin/python-pegjs: Python parser using PEG.js](https://github.com/Kantouzin/python-pegjs)
