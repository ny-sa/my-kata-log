//Your goal is to create a function to format a number given a template; if the number is not present, use the digits 1234567890 to fill in the spaces.

//A few rules:

//the template might consist of other numbers, special characters or the like: you need to replace only alphabetical characters (both lower- and uppercase);
//if the given or default string representing the number is shorter than the template, just repeat it to fill all the spaces.
//A few examples:

//numericFormatter("xxx xxxxx xx","5465253289") === "546 52532 89"
//numericFormatter("xxx xxxxx xx") === "123 45678 90"
//numericFormatter("+555 aaaa bbbb", "18031978") === "+555 1803 1978"
//numericFormatter("+555 aaaa bbbb") === "+555 1234 5678"
//numericFormatter("xxxx yyyy zzzz") === "1234 5678 9012"

//My solution
function numericFormatter(template, number = '1234567890') {
    let formatted = '', currentNumber = 0;
    for (let i = 0; i < template.length; i++) {
        if (template.toLowerCase().charCodeAt(i) < 123 && template.toLowerCase().charCodeAt(i) > 96) {
            formatted += number[currentNumber];  
            currentNumber++;          
            if (currentNumber === number.length)
                currentNumber = 0;
        }
        else formatted += template[i];
    }
    return formatted;
}