// node --experimental-modules --experimental-wasm-modules main.mjs
'use strict'

import { add } from './add.wasm';
import { PerformanceObserver, performance } from 'perf_hooks';

// console.log(add(2, 2)) // -> '4'
// console.log(add.toString()) // -> 'function 0() { [native code] }'

main();

function main () {
	setupBenchmarkReader()
	loop(add, 'WASM', 10);
	loop(addJS, 'js', 10);
}

function addJS (a, b) {
	return a + b;
}

function setupBenchmarkReader () {
	const obs = new PerformanceObserver((list) => {
		const entry = list.getEntries()[0];
		console.log(`Time for ('${entry.name}')`, entry.duration);
	});
	obs.observe({ entryTypes: ['measure'], buffered: false});
}

function loop (f, markName, iterations = 1e5) {
	performance.mark(markName + '-init');
	for (var n = 0; n < iterations; ++n) {
		var x = f(n, n + 1);
	}
	performance.mark(markName + '-end');
	performance.measure(markName, markName + '-init', markName + '-end');

	// NOTE: f.name is 0 for WASM module
	console.log(`Ran add function ${iterations} times.`)
}
