for(let i:number = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if(i % 3 === 0){
    console.log("Fizz");
  }else if(i % 5 === 0){
    console.log("Buzz");
  }else{
    console.log(i)
  }
}

let numberCount: number  = 1;

while(numberCount <= 100){
  if(numberCount % 3 === 0 && numberCount % 5 === 0){
    console.log("FizzBuzz");
  }else if(numberCount % 3 === 0){
    console.log("Fizz");
  }else if(numberCount % 5 === 0){
    console.log("Buzz");
  }else{
    console.log(numberCount)
  }
  numberCount++;
}

for(let i:number = 1; i <= 100; i++){
  i % 3 === 0 && i % 5 === 0 ? console.log("FizzBuzz") :
  i % 3 === 0 ? console.log("fizz") :
  i % 5 === 0 ? console.log("Buzz") :
  console.log(i);
}