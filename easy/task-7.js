/* 
Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
Examples
whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f"
Notes
This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).
*/

function whichIsLarger(f, g) {
    return f() > g() ? "f" : f() < g() ? "g" : "neither";
}

console.log(whichIsLarger(() => 5, () => 10)); // "g"
console.log(whichIsLarger(() => 25,  () => 25)); // "neither"
console.log(whichIsLarger(() => 505050, () => 5050)); // "f"
