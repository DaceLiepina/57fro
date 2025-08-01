
//kad funkcija izsauc pati sevi
//sastav no 
//       - izejas noteikumiem
//       - 
function recursivePrint(number){
    if(number > 5){
        recursivePrint(number - 1);
        console.log(number);
    }
}

recursivePrint(8);

console.log("**********");
//while(true){
 //   console.log("hey");
//}

function recursivePrint1(number){
if(number >= 1){
     
    recursivePrint1(number - 1);
    console.log(number)
}
}
recursivePrint1(5);

console.log("**********");

function recursivePrint2(A, B) {
    if (A === B) {
        console.log(A);
    } else if (A < B) {
        console.log(A);
        recursivePrint2(A + 1, B);
    } else {
        console.log(A);
        recursivePrint2(A - 1, B);
    }
}
recursivePrint2(5,1);

console.log("**********");



