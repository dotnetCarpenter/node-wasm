# node-wasm
A working example for the new `--experimental-wasm-modules` feature in node.js `v12.3.1`.

List of changed WAT instructions: https://github.com/WebAssembly/spec/issues/884#issuecomment-426433329

## Features
- Node project using `--experimental-wasm-modules`
- Usage example

## Usage
### Prerequisite
- Install node.js 12+ on your machine. Get it [here](https://nodejs.org/).
- `wat2wasm`. Debian: `sudo apt install wabt`
- Gnu Make (or execute `wat2wasm` and `node` manually)

### Setup
```
git clone git@github.com:dotnetCarpenter/node-wasm.git
cd node-wasm
make
```


Inspired by https://github.com/florisdh/node-wasm
