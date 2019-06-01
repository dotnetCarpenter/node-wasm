(module
  (export "add" (func $add))
  (func $add (param i32) (param i32) (result i32)
    (i32.add
      (get_local 0)
      (get_local 1))
  )
)