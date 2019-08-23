//Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once
// (ignore duplicates).
//
// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

//My solution
function minValue(values) { //No native methods challenge
    let arr = [], allowed = true, temp, sum = 0;
    for (let i = 0; i < values.length; i++) {
        allowed = true;
        for (let j = 0; j < arr.length; j++)
            if (arr[j] == values[i]) {
                allowed = false;
                break;
            }
        if (allowed) arr[arr.length] = values[i];
    }
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++)
        sum += arr[i] * 10 ** j;
    return sum;
}

console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));