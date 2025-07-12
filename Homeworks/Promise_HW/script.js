function myDay(){
    return Math.random() >= 0.5;
}

const dayPromise = new Promise(function(res, rej) {
    setTimeout(() => {
        if(myDay()){
            res("Best day of my life");
        }else{
            rej(new Error("Something is off"));
        }
    }, 2000)
});

dayPromise
  .then((day) => {
    console.log(day);
  })
  .catch((error) => {
    console.log(error);
  });