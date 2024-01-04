 //print
 console.log('Hello');
 //variable
 a=10; //non-declarative variable
 console.log(a);
 var a=20;  //variable declaration if needed
 console.log(a);
 {
    var a=90; //value to 90
    console.log(a);
 }
 console.log(a);
 let b=24;
 console.log(b);
 {
    let b=23;
    console.log(b);
 }
 console.log(b);
 b=45;  
 console.log(b);
 const v=56;
 {
    const v=70;
    console.log(v);
 }
 console.log(v)
 //Datatype
 console.log(typeof(v));
 let firstName="My name is Amala";
 console.log(typeof(firstName))
let abc=true;
console.log(typeof(abc)) // will return boolean
//unefined
var t; // value not assigned so unefined
console.log(t)
console.log(typeof(t)) //value not assigned so unefined
var st=''
console.log(typeof(st))  //will return string

//Arrays
let arr=[1,2,3,4,'maya']
console.log(typeof(arr))  //in js tpe is object
console.log(arr[5]) // becoz no 5
console.log(arr[1])

//Js objects
let pers1={
   name:'anu',
   age:28
}
console.log(pers1.age)
var arr_obj=[{name:'Maya',location:'kochi'},{name:'mera',location:'tvm'}]
console.log(arr_obj[1].location)
//operators
let tr=3;
console.log(tr+=3)
//increment operator
let inc=7 //old variable
let inc1=inc++ //inc1-new variable
console.log(inc1)
//postfix: old increments its value, new assigned show old value
//prefix:both same value

//comarison operator
if (inc===inc1) {
   console.log('values are equal')
   
} else {
   console.log('values are not equal')
   
}

let x=8;
let y=5;
if (x==y) {
   console.log('both equal');
} else if (y>x){
   console.log('y greater than x');
}
else{
   console.log('x greater than y');
}

//logical operators
if((inc===inc1)&& (inc==89)){
   console.log('both values are equal and value is 89')
}
else{
   console.log('fail')
}
let re=90;
let ne=100;
let xe=(ne-re)+(8**2)
console.log(xe)

//function
function adval1(add1,add2) {
   var sum=add1+add2;
   console.log('sum of values is ' +sum);               //declaration
   
}
adval1(10,20);  //func call


//tpe=2
function adval1(add1,add2) {
   var sum=add1+add2;
   return sum;               //declaration
   
}
var be=adval1(1,2); 
console.log('sum of values is ' +be)


//substracton function demo
function sub(num1,num2) {
   var subt=num1-num2
   return subt;
}
var cd=sub(10,3);
console.log('sub of values is ' +cd)


//multiplication
function multi(num1,num2) {
   var mul=num1*num2
   return mul;
}
var yu=multi(10,3);
console.log('multi of values is ' +yu)

function divi(num1,num2) {
   var division=num1/num2
   console.log('division of values is ' +division)
}
divi(10,2)


//looping state,ents
for(i=0;i<6;i++)
{
   console.log(i);
}
//create 5 elements and print al elements
let arr3=['ab','bc','cd','de','ge']
//for (let i=0;i<arr.length;i++)
//{
//console.log(arr3[i]);
//}

//for of loop(use in array only)
for(x of arr3)
{
   console.log(x);  //x is just a variable
}

//for in loop
let person1={name:'amala',ae:28}
for(x in person1)
{
console.log(person1[x])  //to get value of key value
}

//while loop
//to print from 1 to 10
let j=1;
while(j<=10)
{
   console.log(j);
   j++;
}

//to print array using while
let arr4=['ab','bc','cd','de','ge']
while(arrj<arr4.length)
{
   console.log(arr)
}


//do while
