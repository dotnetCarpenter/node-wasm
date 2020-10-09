;; wat2wasm add.wat -o add.wasm && wasm-validate add.wasm
(module
  (func $add (param i32 i32) (result i32)
    (i32.add
      (local.get 0)
      (local.get 1))
  )
  (export "add" (func $add)))