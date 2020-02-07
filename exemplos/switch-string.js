var text;
var fruit;

fruit = "Orange";
// fruit = "orange";

switch (fruit) {
    case "Banana":
        text = "Banana is good!";
        break;
    case "Orange":
        text = "I am not a fan of orange.";
        break;
    case "Apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
}

console.log(text);