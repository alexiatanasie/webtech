//types of variables in JS
 
//const: a block-scoped variable,  it cannot be redeclared or reassigned
//let :  a block-scoped variable, can be reassigned, but not redeclared
// var : a GLOBAL or LOCAL variable, can be redeclared and reassigned

var name="kook";
let age=20;
const country="tenerife";

name="cuk";
age=22;
//country="cz"; //no

console.log(name);
console.log(age);
console.log(country);

//types of primitives: Number, Boolean, String, BigInt, undefined,null
var a=10;
var b=undefined; //never do this
var c=null; //undefined is not the same with null
console.log(a);
console.log(b);
console.log(c);

if(a===b){
    console.log('same val');
}
else{
    console.log('diff val');

}

console.log(''=='0');//false //they are both strings , '' is an empty string , so it is not equal to'0'
console.log(0=='');//true //js converts the '' to 0 before making the comparison 
console.log(0=='0');//true // js conerts the '0' to 0 before mainkg the comp

let number=22;
let text="hello ale";
let isStudent=true;
let x=null;
let y;

console.log(typeof number);
console.log(typeof text);
console.log(typeof isStudent);
console.log(typeof x);
console.log(typeof y);

//ARRAYS
//collection or a list of elements that can be accessed by an index

let fruits=["strawberries","mango","banana"]
console.log(fruits[1]);

//adding elements to the array
fruits.push("kiwi");
console.log(fruits);

//removing an element from the array
fruits.pop();
console.log(fruits);

//shifting an element from the array- removing the first element from the array
fruits.shift();
console.log(fruits);

//adding elements at the begginning  of the array
fruits.unshift("lemon");
console.log(fruits);


//FUNCTIONS IN JS
function greeting(name){
    return "hello"+" " + name;
}console.log(greeting("kook"));


//write a fct that takes a nr and returns its square
function square(x){
    return x*x;
}
console.log(square(7));

//ARROW FUNCTIONS

//1.no 'this'binding
//Regular funct
function person(){
    this.age=0;
    setInterval(function(){
        this.age++;
    },100)
}
const p1=new person();
console.log(p1);

//Arrow function
function person1(){

    this.age=0;
  setInterval(()=>{this.age++;

  },1000);
}

const p2=new person1();
console.log(p2);

//2. no arguments object:(...args)

//Regular fct
function showArg(){
    console.log(arguments);
}
showArg(1,2,3); //array-like object

//Arrow fct
const showArg=(...args)=>{
    console.log(args);
}
showArg(1,2,3); //proper array

//using arrow fcts
//callbacks
//event listeners
//methods like setInterval() or setTimeout()

const greeting=name=>`hello,${name}`;
