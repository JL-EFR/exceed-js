//variable
//let,const,var
let a='Hi';
console.log(a);
a='new';
console.log(a);
const  height=100;
//height=200; can't change value
c=1;
var c;
console.log(c);
//not recommended to use var

//naming convention
//camelcase -> js
//snake_case
//kebab_case
//Pascal_case

//datatypes
let o=null;
let u=undefined;
let myString='Hello World';
let myNumber=3;
let myBoolean=true // or false
let myArr=[1,'n',false,[3,'3']];
let myObj={name: 'A',age: 20};//python Dict or C++ map
let num1=3+3-(3*3)/3;

// should use === for equivalent
console.log('123'==123);
console.log('123'===123);

//conditionals

let fruit = 'melon';

if (fruit==='banana'){
    console.log('banana');
}
else if (fruit==='apple'){
    console.log('apple');
}
else{
    console.log('something');
}

//ternary Operator

const result=10%2===0 ? 'even':'odd';
console.log(result);

const fruits=['apple','mango','banana','orange'];
console.log[fruits.length];
console.log[fruits[1]];

fruits.push['grape'];
console.log(fruits);
console.log[fruits.length];
fruits.splice[0,2];
console.log[fruits];

//loop

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(const f of fruits){
    console.log(f);
}

//string concatenating
const name='a';
const greeting1='Hello, ' + name;
const greeting2=`Hello, ${name}`;
console.log(greeting1);
console.log(greeting2);

function add(num1,num2){
    return num1+num2;
}

const add2=(num1,num2)=>{
    return num1+num2;
};

//Callback Function

function greeting(Callback){
    Callback('Nice');
}

function logGreeting(name){
    console.log('Hello',name);
}

greeting(logGreeting);

const dog={
    name: 'Bill',
    age: 10,
    color: 'black',
    bark(){
        console.log('Wulff');
    },
    introduce(){
        console.log(`I am a dog named ${this.name}`);
    }
};

console.log(dog.name);
dog.bark();
dog.introduce();

console.log(dog.age);
dog.age=20;
console.log(dog.age);
dog.breed='Shiba';
console.log(dog.breed);

const me={
    name: 'Jompop',
    lname: 'Likitratanaporn',
    year: 2,
    age: 20,
    status: 'student',
    intro(){
        console.log('My name is ${this.name} ${this.lname}')
    },
    greet(pname){
        console.log('Hi!!'+pname);
    }
};

// Destructuring assignment

const d1 = [1, 2, 3, 4, 20];
const d2 = { str: 'Hi', num: 2, bool: false, arr: [1, 2, 3] };

const [des1, des2, ...rest] = d1;
console.log(des1, des2);
console.log(rest);

const { str, num, bool, arr } = d2;
console.log(str);
console.log(num);
console.log(bool);
console.log(arr);

// Basic Array Methods

const persons = [
  {
    id: 1,
    name: 'A',
    age: 44
  },
  {
    id: 2,
    name: 'B',
    age: 20
  },
  {
    id: 3,
    name: 'C',
    age: 13
  },
  {
    id: 4,
    name: 'D',
    age: 18
  },
  {
    id: 5,
    name: 'E',
    age: 5
  }
];
// forEach
persons.forEach((person) => console.log(person.name));

// find
const personWithId3 = persons.find((person) => person.id === 3);
console.log(personWithId3); // { id: 3, name: 'C', age: 13 }

// findIndex
const indexOfB = persons.findIndex((person) => person.name === 'B');
console.log(indexOfB); // 1

// filter
const adults = persons.filter((person) => person.age >= 18);
console.log(adults); // [{ id: 1, ... }, { id: 2, ... }, { id: 4, ... }]

// map
const personNameList = persons.map((person) => person.name);
console.log(personNameList); // ['A', 'B', 'C', 'D', 'E']