// node --experimental-modules --experimental-wasm-modules main.mjs
'use strict'

import { PerformanceObserver, performance } from 'perf_hooks';
const observations = []


import { add } from './add.wasm';

function addJS (a, b) {
	return a + b;
}

main();

function main () {
	const testBench = [
		[add, 'WASM10', 10],
		[add, 'WASM1000', 1000],
		[add, 'WASM10000', 10000],
		[add, 'WASM100000', 100000],
		[addJS, 'js10', 10],
		[addJS, 'js1000', 1000],
		[addJS, 'js10000', 10000],
		[addJS, 'js100000', 100000],
	];

	setupBenchmarkReader();

	testBench.sort(() => Math.random() < .5 ? -1 : 1)
	testBench.forEach(unit => {
		loop(unit[0], unit[1], unit[2]);
	});

	observations.sort((entryA, entryB) => entryA.name < entryB.name ? 1 : -1)
	observations.forEach(entry => {
		console.log(`Time for '${entry.name}':`, entry.duration);
	});
}

function setupBenchmarkReader () {
	const obs = new PerformanceObserver((list) => {
		const entry = list.getEntries()[0];
		observations.push(entry)
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
	console.log(`Ran ${markName} function ${iterations} times.`)
}
