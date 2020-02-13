// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####
// Challenge banner
function banner(n) {
	console.log("\n######### Challenge " + n + " #########");
}
banner("Banner Function Works!");

// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.
// Use `if` and a modulus operation.
banner(2);
for(let i = 1; i <= 20; i++) {
	if(i % 3 === 0) {
		console.log(i);
	}
}

// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
banner(3);
for(i = 3; i < 20; i += 3) {
	console.log(i);
}


// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
banner(4);
for(i = 20; i > 0; i--) {
	console.log(i);
}


// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
banner(5);
let str = "Boy howdy I am good at this!";
for(i = 0; i < str.length; i++) {
	console.log(str[i]);
}

// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
banner(6);
console.log(str[1]);
for(i = 1; i < str.length; i++) {
	if((i + 1) % 3 === 0) {
		console.log(str[i]);
	}
}

// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
banner(7);
str = "Am I the best?";
for(i = 0; i < str.length; i++) {
	console.log(str[i].toUpperCase());
}

// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
banner(8);
str = "Whoa, I am the best!";
let wasSpace = 1;
let wordCount = 0;
let out = '';
for(i = 0; i < str.length; i++) {
	out = str[i];

	if(str[i] === ' ') {
		wasSpace = 1;
	} else {
		if(wasSpace) {
			wordCount++;
			wasSpace = 0;
		}
		if(wordCount === 3) {
			out = str[i].toUpperCase();
		}
	}
	console.log(out);
}


// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
banner(9);
str = "I am become death, destroyer of worlds.";
for(i = str.length - 1; i >= 0; i--) {
	console.log(str[i]);
}


// 10.
//
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!
console.log("Here today is:");
for(i = 0; i < names.length; i++) {
	if(names[i] === '|') {
		console.log("Here today is");
	} else {
		console.log(names[i]);
	}
}

// 11.
//
// There is no 11. Celebrate! You did it!
