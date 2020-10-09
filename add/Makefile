TARGETS:=$(subst wat,wasm,$(wildcard *.wat))

.phony: debug
all: run

debug:
	@echo $(TARGETS)

%.wasm : %.wat
	wat2wasm $? -o $*.wasm && wasm-validate $*.wasm

run : $(TARGETS)
	# --experimental-modules needed for node 12 but not 14
	node --experimental-modules --experimental-wasm-modules main.js
