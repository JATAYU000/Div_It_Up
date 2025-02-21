# 1. Sub Topic 1
## Assignment

> Shopping is something which is a part of our everyday life , and it involves a lot of tasks going on at the backend as well. I bet many different data types could be used while building a shopping cart. According to me, number and string data types would be ones I would require the most, for items and their prices, which is the formost detail to be specified in a cart.I could also use the boolean datatype maybe to check whether if an item is available or not, as well as NUll for the absence of any value. I would use non-primitive data types, i.e, objects , functions and arrays. Objects could be used to hold the items with their prices and I could further use the arrays to specify a list of items belonging to a particular brand or even specify different brands of items of the same type. While there are different ideas, I would finish off by using functions to define specific tasks, like calculating total price, number of quantites, or reading the price, or checking the expiry, etc.. I could use these functions later whenever necessary to perform the subsequent tasks.
 
## Challenge

### 1. Case Sensitivity:

> Variables in java are case-sensitive, meaning that variables having variable name as age and Age are 2 different variables altogether and are not the same.

### 2. Equality Signs:

> The double equal operator follows type coercion which means that both the data types of the variable do not need to match, for example, an empty string and 0 would mean the same. However, the triple equality operator is a strict equality operator i.e it will perform a type coercion.

### 3. typeof:

> Null isn’t an object, but the typeof operator returns an object because of an old bug in the language it self, which now cannot be fixed since much of the web depends on testing for null using the typeof operator

### 4. NaN is not equal to itself

### 5. 0 and -0

> 0 and -0 are not equal in javascript, for example, 12/0 and 12/-0 are 2 different values, pointing towards the opposite address.

# 2. Sub Topic 2
## Assignment

```javascript 
function welcome(){
  console.log("Welcome to India !");
}

function selection(name){
  const msg = `${name} has been selected`;
  return msg;
}

function para(name,deg = "Btech"){
  console.log(`${name} is currently doing ${degree}");
}

```

# 3. Sub Topic 3

## Assignment

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
let index = 0;

let len = allStudents.length();

for (let i = 0; i < len ; i++ ){
    let grade = allStudents[i];
    if (grade >= 3){
        studentsWhoPass[index] = allStudents[i];
        index += 1;
    }else if (['A','A-','B','B-','C'].includes(grade)) {
        studentsWhoPass[index] = allStudents[i]; 
        index += 1; 
    }else {
        continue;
    }
}

console.log(studentsWhoPass);

``` 

## Challenge

```javascript
let a=12;
let b=5;
let c=13;
let triangle;

// Using logical operators

if (a+b>c && a+c>b && b+c>a){
   triangle = true;
}else{
   triangle = false;
}

// Using ternary operator

let triangle = (a+b>c && a+c>b && b+c>a) ? true : false ;

```

I would prefer using ternary expression in this case, because it would help make my code look simpler and is also shorter than the conventional way. However, since ternary can only satisfy conditions which are either true or false, but cannot check multiple conditions together unlike in conditional way, I prefer writing my code using the conditional operators in general.Also, while using if, else if and else statements, it gives us the freedom to tweak the conditions as and however we like, unlike in ternary, which again makes the ternary statements less useful.

# 4. Sub Topic 4

## Assignment

```javascript
for (let i=3 ; i<20 ; i+=3){
   console.log(i);
}
```
 
## Challenge

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for ( let element of iceCreamFlavors ){
  console.log(element);
}

``` 
