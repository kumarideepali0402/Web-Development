// HOF
// const callback=(n)=>{
//     return n**2;
// }

// function cube(){
//     return callback(n) *2;
// }
// console.log(cube(callback,3));

// setInterval

// function greet(){
//     console.log("hello");
// }
// setInterval(greet,1000);

// setInterval(
// () =>{
// console.log("hello");
// },
// 1000);

// setTimeout
// setTimeout(
// () =>{
// console.log("hello");
// },
// 5000);

// Functional Programming
// Map filter reduce for each find sum sort every
// Callback Hell

// const num=[1,2,3,4]
// const square=num.map((num)=> num*num);
// console.log(square);

// Filter
// const country=["Finland","Ireland","Pakistan"]
// const land=country.filter((country)=>country.endsWith("land"));
// console.log(land);

// Reduce

// const numb=[1,2,3,4,5]
// const vari=numb.reduce((acc,curn)=> acc+curn,10);
// console.log(vari);

// forEach

// const num1=[1,2,3,4,5,6];
// sum=0
// // num1.forEach((num)=> console.log(num));
// num1.forEach((num)=>{
//     sum+=num;

// });
// console.log(sum);

// sort
// const arr=["Anup","Arun","Alka","Aasha"];
// console.log(arr.sort()); 


// const names = ["abhay","nischay","ankit","harsh"]
// let [names1,names2,names3,names4]=names;
// console.log(name1,name2,name3,name4);
// const name=[["abhay","nischay"],["ankit","harsh"]]
// let [name1,name2]=name;
// console.log(name1,name2);
// let names5=[];

// for(let i=0;i<names.length;i++){
//     names5.push(names5[i]);
// }
// console.log(names5)

// let obj={
//     'width':20,
//     'height':10,
//     'area':200,
// }
// let {width,height,area}=obj
// console.log(width,height,area);

// answer to find?
// (...args)Rest or spread
// harsh(...args) //Rest or Spread

const names=[1,2,3,4,5,6,7,8,9];
let [num1,num2, ...args]=names;
console.log(args);


// Q1.
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// // Destructure and assign the elements of the constants array to e, pi, gravity, humanBodyTemp, and waterBoilingTemp.
// let [e ,pi, gravity, humanBodyTemp,  waterBoilingTemp]=constants;
// console.log(e ,pi, gravity, humanBodyTemp,  waterBoilingTemp);
// // Destructure and assign the elements of countries array to fin, est, sw, den, nor
// let[fin, est, sw, den, nor]=countries;
// console.log(fin, est, sw, den, nor);
// // Destructure the rectangle object by its properties or keys.
// let {width,height,area,perimeter}=rectangle;
// console.log(width,height,area,perimeter);


// query Selector
const title=document.querySelectorAll("h1")
console.log(title)
title[3].className="title3";
title[3].id="yuj";
// set-Attribute
title[3].setAttribute("class","fourth1");
title[3].setAttribute("id","fourth1");
title[3].textContent="namaste"//correct
title[3].outerText="namaste"
title[3].innerHTML="namaste"//incorrect
// screen axtivity
// .createElement
// document.body.appendChild(title)
// virtual dom
// event listener
// .removeChild
// cancelIdleCallback
// dbclick
// mouse enter
// mouse click
// key up
// key down
// blur:take focus on mousepointer