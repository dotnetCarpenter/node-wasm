'use strict'

// const fs = require('fs');
// const buf = fs.readFileSync('./addTwo.wasm');
// const lib = Wasm.instantiateModule(new Uint8Array(buf)).exports;
import * as addTwo from './addTwo.wasm';

// console.log(addTwo(2, 2)); // Prints '4'
console.log(addTwo.toString()); // Prints 'function addTwo() { [native code] }'
