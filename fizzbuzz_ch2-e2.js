/* 
# Eloquent JavaScript, Chapter 2: Program Structure, Exercise 2
## FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed 
to weed out a significant percentage of programmer candidates.
So if you solved it, you’re now allowed to feel good about yourself.)

*/

(function(){ // This is our self envoking closure. We do this to keep the global environment pure. 
	
	// Laymen answer: 
	for(var i = 1; i<=100; i++){				// Loop through 100.
		console.log(i);										// Print number of current loop.
		if(i%3 == 0 && i%5 == 0){					// If the current loop number is divided by 3 with no remainder and same for dividing it by 5, then:
			console.log(i+" FizzBuzz");			// Print "FizzBuzz".
		}	else if(i%3 == 0){							// else if the current number is divided by 3 with zero remainder:
			console.log(i+" Fizz");					// Print "Fizz".
		} else if(i%5 == 0){							// else if the current number is divded by 5 with 0 remainder, then:
			console.log(i+" Buzz");					// Just print "Buzz".
		}																	// End all if/ else if conditions.
	}																		// Closing bracket of 1 -> 100 loop from above. 
	
	// Eloquent Answer: 
	for (var n = 1; n <= 100; n++) {
	var output = "";
	if (n % 3 == 0)
		output += "Fizz";
	if (n % 5 == 0)
		output += "Buzz";
		console.log(output || n);
	}	
	
})();









