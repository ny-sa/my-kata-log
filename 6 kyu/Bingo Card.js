//After yet another dispute on their game the Bingo Association decides to change course and automize the game.
//
// Can you help the association by writing a method to create a random Bingo card?
//
// Task:
//
// Finish method:
// getCard()
// A Bingo card contains 24 unique and random numbers according to this scheme:
// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
//
// The card must be returned as an array of Bingo style numbers:
// { 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

//My solution
function getCard() { //No native methods (other than random numbers) challenge
    let bingo = [], letter = 'B', num = 0, notDuplicate = false, part = '';
    for (let i = 0; i < 24; i++) {
        if (i == 5) { letter = 'I'; num = 15; }
        if (i == 10) { letter = 'N'; num = 30; }
        if (i == 14) { letter = 'G'; num = 45; }
        if (i == 19) { letter = 'O'; num = 60; }
        while(!notDuplicate) {
            part = letter + `${Math.floor(Math.random() * 15) + 1 + num}`;
            for (let j = i - 4; j < i; j++) {
                if (bingo[j] == part) {
                    notDuplicate = false;
                    break;
                }
                else notDuplicate = true;
            }
        }
        bingo[i] = part;
        notDuplicate = false;
    }
    return bingo;
}

//'Best practices' solution
function genRange(arr, letter, start, end, count) {
    var taken = [];
    for(var i = 0; i < count; ) {
      r = Math.floor(Math.random() * (end - start) + start);
      if(taken.indexOf(r) == -1) {  //indexOf() returns -1 on non-existent elements
        taken.push(r);
        arr.push(letter + r);
        i++;
      }
    }
  }
  function getCard()
  {
    var arr = [];                   //more elegant and scalable when the implementation is a separate function with inputs
    genRange(arr, "B", 1, 15, 5);
    genRange(arr, "I", 16, 30, 5);
    genRange(arr, "N", 31, 45, 4);
    genRange(arr, "G", 46, 60, 5);
    genRange(arr, "O", 61, 75, 5);
    return arr;
  }