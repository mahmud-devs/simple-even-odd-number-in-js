/*====================================

    odd and even number

=====================================*/

let input = prompt("Enter any number");
let number = +input;

if (number % 2 == 0 && number >= 0) {
    console.log(number,"is a even number" );
} else if(number % 2 !== 0 && number >= 0){
    console.log(number, "is a odd number");
}
 else {
    console.log("invalid input");
}
