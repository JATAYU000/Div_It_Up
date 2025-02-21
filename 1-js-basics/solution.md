## Data Types - Practice
```
For building a shopping cart, I would make use of the following data types:
```
* Numbers : Integers  for the indices/serial nos. and floating point numbers for the prices of items. 

* Strings : Will use them for containing the names of all products.

* Arrays : To store the list of products currently picked by the customer. 

* Objects : To store the data that's related to a customer. 
  
* Booleans : To display when the cart is empty and when it is not. 

<br>

## Functions & Methods
```
Challenge (Articulate the difference between functions and methods) : 
```
* Functions are standalone ie, they could be called independently. But methods are parts of objects and can not be called independently.

<br>

```
Assignment: 

function greetNoReturn() {
console.log("Hey there!");
}
function greetReturn() {
  return "Hey there";
}
function greetParams(first, second) {
  return `Hey there ${first} ${second}`;
}
function greetDefaultParam(first, second, greet = "Welcome") {
  return `${greet} to the club, ${first} ${second}`;
}
let fatArrowFunc = () => {
  console.log("Aren't you tired of hellos ?");
}

greetNoReturn();
let w = greetReturn();
let x = greetParams("Rohith", "A P");
let y = greetDefaultParam("Rohith", "A P");
let z = greetDefaultParam("Rohith", "A P", "Hello! welcome");

console.log(x);
console.log(y);
console.log(z);
fatArrowFunc();
```

<br>

## Making Decisions

```
Challenge: 

// Using logical operators
let progress = "Completed Praveshan"
let sem = 2;
if (progress === "Completed Praveshan" && sem <= 3){
    console.log("Congrats, You are eligible for the interview!");
} else{
    console.log("Better luck next time!")
}

// Using ternary operator
let eligibility = (progress === "Completed Praveshan" && sem <= 3) ? "Congrats, You are eligible for the interview!" : "Better luck next time!";
console.log(eligibility);
```
I prefer using the ternary operator.

```
Assignment: 

  let allStudents = ["A", "B-", 1, 4, 5, 2];
  let studentsWhoPass = [];
  for (i = 0; i<allStudents.length; i++){
      if (allStudents[i] >= 3){
          studentsWhoPass.push(allStudents[i]);
      }
      else{
          if (typeof(allStudents[i]) !== 'number' && allStudents[i]!=="C-"){
              studentsWhoPass.push(allStudents[i]);
          }
      }
  }


```



<br>

## Loops and Arrays

```
Challenge: 

  // Using forEach
  let roles = ["AI", "Web", "DevOps", "Systems"];
  roles.forEach(role => console.log(`${role} is a great choice!`));
  
  // Using for-of
  for (role of roles){
      console.log(role);
  }

  // Using map
  let newRoles = roles.map(x => x + "!");
  console.log(newRoles);

  // common array methods
  roles.push("Android");
  console.log(roles.sort())
  roles.splice(roles.length, 0, "Research")
  console.log(roles.splice(roles.length, 0, "Research"));
```

<br>

```
Assignment: 

  for (i=1; i<=20; i+=3){
    console.log(i);
  }
```


