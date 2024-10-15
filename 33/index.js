//logs
//1. for loop;  2. for..of; 3. while; 4.foreach

//for 
//let fruits=["apple","mango","banana"];
//for(let i=0;i<fruits.length;i++){
 //   console.log(fruits[i]);
//}

//for of
// let fruits=["apple","mango","banana"];
// // for(let fruit of fruits){
// //     console.log(fruit);
// // }

// //foreach
// fruits.forEach((fruit,i)=>{
//     console.log(fruit);
// })

//map & reduce
//map() used for by applying a function to each element of an array
 let numbers=[2,4,6,8];
 let squares =numbers.map(num=>num*num);
 console.log(squares);

 //reduce()- used for reducing an array to a single element
 let sum=numbers.reduce((ac,i)=>ac+i, 0);
 console.log(sum);

 //to do:apply map() on an array of 5 elements which multiplies them by 3
 let nr=[1,2,3,4,5];
 let m=nr.map(nr=>nr*3);
 console.log(m);

 //String format
 let name="john";
 let age=25;
 let message=`my name is ${name} and i have ${age} years old`;
console.log(message);

//global map function 
function  mapX(array,callback){
    let result=[];
    for(let i=0;i<array.length;i++){
        result.push(callback(array[i],i,array));
    }//push adauga mereu la final valoarea calculata cu callback , ia valoarea pe poz i , se pune in vect rezultat, result, tot pe i, si array e vect scos
    return result;

}

let numberss=[1,3,5,7];
let doubled =mapX(numberss, num=>num*2);
console.log(doubled);

//method chaining
//calling multiple array methods in one statement
let numbers3=[1,2,3,4,5,6];
let result3=numbers3.filter(numm=>numm%2===0).map(numm=>numm*10).reduce((acc,i)=>acc+i,0);
console.log(result3);