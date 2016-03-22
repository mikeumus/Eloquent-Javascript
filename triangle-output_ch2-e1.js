/* 
# Eloquent JavaScript, Chapter 2: Program Structure, Exercise 1
## Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

var abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the exercise. 
Remember that you can click code blocks to edit them.
*/

(function(){ // This is our self envoking closure. We do this to keep the global environment pure. 
	
	// Long obvious answer: 
	var theTriangle = "";
	for(var i = 0; i<7; i++){
		theTriangle = theTriangle += "#";
		console.log(theTriangle);
	}	

	// Eloquent JavaScript official annswer: 
	for (var line = "#"; line.length < 8; line += "#")
	  console.log(line);

})();











