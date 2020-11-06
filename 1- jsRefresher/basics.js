const person = {
  name: "Lalit",
  age: 29,
  greet() {
    console.log("Hi I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];

// //Spread operator allows us to only pull out the elements inside an array or object
const copiedArray = [...hobbies];

console.log(copiedArray);

// //The rest operator allows us to remove the limit of arguments we can put inside a function
// //Both spread and rest operators are the same, its the way they are implemented that matters
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));

//Object Destructuring
// We use { } and specify the element that we want from the object that we are expecting as an argument in the fucntion

//This is destructuring objects
const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

// //This is destructuring arrays
const [ele1, ele2] = hobbies;
console.log(ele1, ele2);

//Async and Promises

//Promises
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello");
console.log("Hi");
