//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd"
// for odd numbers.

//My solution
function even_or_odd(number) { //No native methods "challenge"
    return number % 2 == 0 ? 'Even' : 'Odd';
}

//'Best Practices' solution
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even" //seem '== 0' is not necessary
  }