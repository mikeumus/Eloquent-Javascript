/* 
# Eloquent JavaScript, Chapter 2: Program Structure, Exercise 3
## Chessboard

Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the grid
there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, 
define a variable size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
*/

(function(){ // This is our self envoking closure. We do this to keep the global environment pure. 

	function makeBoard(size){
		var board="";
		for(var y=0; y<size; y++){
			for(var x=0; x<size; x++){
				if((x+y) % 2 == 0){
					board +=' ';
				} else{
					board+='#';
				} // end else
			} // end x for loop
			board +="\n";
		} // end y for loop
		console.log(board);
	} // end makeBoard() function definition

makeBoard(8);

})();









