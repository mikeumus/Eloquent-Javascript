
/* 
# Eloquent JavaScript, Chapter 3: Data Structures, Exercise 2
## Reversing an Array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

*/

(function(){ // This is our self envoking closure. We do this to keep the global environment pure. 
	
	function reverseArray(arr) {
		var reversedArr = [];
		for (let i = arr.length -1; i >= 0; i--) 
			reversedArr.push(arr[i]);
		return reversedArr;
	}
	
	// Not the official answer from http://eloquentjavascript.net/code/#4.2
	// Instead of using modulo to flip operations half way through a while loop
	// is used for a easier to understand/follow approach from Marcus Parson's 
	// answer here: https://teamtreehouse.com/community/reversing-an-array-in-javascript
	function reverseArrayInPlace(arr) {
		let first = 0;
		let last = arr.length -1;
		while (first < last) {
			let b = arr[first];
			arr[first] = arr[last];
			arr[last] = b;
			
			first++;
			last--;
		}
		return arr;
	}
	
	console.log(reverseArray(["A", "B", "C"]));
	// → ["C", "B", "A"];
	var arrayValue = [1, 2, 3, 4, 5];
	reverseArrayInPlace(arrayValue);
	console.log(arrayValue);

})();











