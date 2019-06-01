// node --experimental-modules --experimental-wasm-modules main.mjs
'use strict'
import { add } from './add.wasm'
console.log(add(2, 2)) // -> '4'
// console.log(add.toString()) // -> 'function 0() { [native code] }'
