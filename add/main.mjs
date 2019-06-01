'use strict'

// node --experimental-modules --experimental-wasm-modules main.js

import { add } from './add.wasm'

console.log(add(2, 2)) // Prints '4'
console.log(add.toString()) // Prints 'function 0() { [native code] }'
