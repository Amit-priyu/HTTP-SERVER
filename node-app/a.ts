// let x:number=1;
// console.log(x);

// number,string,any

// question-1 
// function greet(firstname:string){
//     console.log("hellow "+firstname);
// }
// greet("Priyadarshini..")


// question-2
// type inference..
function sum(a:number,b:number):number{
    return a+b;
}
const value=sum(10,10);
console.log(value);

// 
// function islegal(age:number){
//     if(age>18) return true;
//     else return false;
// }

// 4. write a functino that takes another function as input and return it after 1 second.
// function runAfter1s(fn :()=>void){
//     setTimeout(fn,1000);
// }
// runAfter1s(function(){
//     console.log("giving function as a input");
// })