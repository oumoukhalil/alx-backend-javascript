/*
 * Run "npm run dev maintest/0-main.js" to test
*/
export function taskFirst(){
	const task = 'i prefert const if i can.';
	return task;
}

export function getLast(){
	return 'it ok';
}

export function taskNext(){
	let combination = 'but sometime let';
	combination += getLast();

	return combination;

	}
