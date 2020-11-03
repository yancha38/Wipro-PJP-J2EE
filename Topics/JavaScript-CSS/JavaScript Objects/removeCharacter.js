let input = prompt("Enter a text : ");
let num = Number(prompt("Enter the number of characters to be removed?"));
document.write("Input String : " + input + "<br><br>");

function removeCharacter(text, number) {
    return text.substring(number);
}

document.write("After Removing " + num + " Characters : " + removeCharacter(input, num));
