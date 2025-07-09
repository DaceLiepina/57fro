// sinhrons kods - liidz asinhronaa
let x = 12;
console.log(x);

x = 10;
console.log(x);
let myname;

setTimeout(()=> {
    console.log("Hello 0 sec");
    myname = "Alisher";
}, 0);

console.log(myname);

//timer - asinhrons kods
setTimeout(()=> {
    console.log("Hello 3 sec");
    console.log("Name:" + myname)
}, 3000);

console.log("Hello, no timer");

// 
function lateHappyBirthday(){
    setTimeout(() => {
        console.log("Happy Birthday");
       // thankYou();

       setTimeout(() => {
       console.log("Thank you");
        }, 6000);
    }, 6000);
}

lateHappyBirthday();

function thankYou(){
    setTimeout(() => {
            console.log("Thank you");
        }, 6000);
}


