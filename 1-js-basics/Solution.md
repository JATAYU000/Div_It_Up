# Sub Topic 1 (Data Types) :

## Challenge :
JavaScript is notorious for its surprising ways of handling datatypes on occasion. Do a bit of research on these 'gotchas'. For example: case sensitivity can bite! Try this in your console: let `age = 1; let Age = 2; age == Age` (resolves false -- why?). What other gotchas can you find?

### Solution :

One of the gotchas I found is `"==" is not the same as "==="`  
For this I also have an example, follows as :

```js
x=45;
y='45';
console.log(x==y); // This will log as True ;
console.log(x===y); // This will return or log False ;
```
The other one which I have found is Java Script is `Case sensitive` 

```js
king = "Thammudu";
King = "Babu"; // here this does'nt show any error why because it is Case Sensitive;

```

The will have a feature which is `Automatic semi-colon insertion` :
The js will automatically inserts the semi-colon while writing the code.

## Assignment :
Imagine you are building a shopping cart. Write some documentation on the data types that you would need to complete your shopping experience. How did you arrive at your choices?

### Documentation :

I did some research on the data types which are,

``` markdown

                                                Data Types
                                                    |
                                                    |
                        ------------------------------------------------------
                        |                                                     |
                        |                                                     |
                  Primitive Type                                        Reference Type
                        |                                                     |
                        |                                                     |
    -------------------------------------------                          ------------
    |           |           |         |         |                       |           |
  Number     String      Boolean    Null    Undefined                 Object     Array                       


  ```

  If I am building a shopping cart I will use the data types such as `Objects`, `Arrays`, `Numbers`, `Strings` more compared with others why because: 
  - I shop list of different objects which I should store in the `Arrays`.  
  - I want to see the cost of the product which makes the use of `Numvers`. 
  - After that I use the `Strings` for displaying the product name and discription of the product.
  - I use the Boolean for checking wethere the product is added to the cart or not and so on.

# Sub Topic 2 (Functions and Methods) :

## Challenge :

Can you articulate in one sentence the difference between functions and methods? Give it a try!

### Solution :

Functions and methods are both blocks of code that perform tasks, but they differ in how they are used. Functions are more general-purpose, while methods are tied to specific objects. 

- Functions are fundamental programming concepts that are essential in the development of well-structured software programs.

- Methods are similar to functions in that they carry out a particular task, but in object-oriented programming, they are linked to an object or class.

## Assignment :

Create different functions, both functions that return something and functions that don't return anything.

See if you can create a function that has a mix of parameters and parameters with default values.


### Solution :

```js 
function Fullname (x) {
    console.log("Hello"+ x);   
} 

let student = (age,value) => console.log("hello "+value+" your age is "+age);

let ball = (x,y=7) => {
    console.log("I have "+ x + " balls in "+y+" different colors");
    return x+5 ;
}

Fullname("chandra");  // Output: Hellochandra
student(145,"chandra");  // Output: hello chandra your age is 145 
ball(67);  // Output: It will log I have 67 balls in 7 different colors , And this will return the value 67+5=72

```

# Sub Topic 3 (Making Decisions) :

## Challenge :

Create a program that is written first with logical operators, and then rewrite it using a ternary expression. What's your preferred syntax?

### Solution :

#### Version using Logical Operators

```js
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(5));   // Output: Positive
console.log(checkNumber(-3));  // Output: Negative
console.log(checkNumber(0));   // Output: Zero
```

#### Version using a Ternary Expression

```js
const checkNumber = (num) => num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

console.log(checkNumber(5));   // Output: Positive
console.log(checkNumber(-3));  // Output: Negative
console.log(checkNumber(0));   // Output: Zero
```

## Assignment :

Given the following array allStudents representing all students and their grades, construct a new array studentsWhoPass containing all students who pass.

```js
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

### Solution ;

```js
let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
  let studentsWhoPass = [];

  for (let i=0 ; i<=allStudents.length ; i++){
    
    if (allStudents[i]=="A" || allStudents[0]=="A-" || allStudents[i]=="B" || allStudents[i]=="B-" || allStudents[i]=="C" || allStudents[i]=="C-" || allStudents[i]>=3 ) {
        studentsWhoPass.push(i);
    }
    else{
        //pass
    }
}

console.log(studentsWhoPass);

        
```

# Sub Topic 4 (Arrays and Loops) :

## Challenge :

There are other ways of looping over arrays other than for and while loops. There are forEach, for-of, and map. Rewrite your array loop using one of these techniques.

### Solution :

```js 
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed

iceCreamFlavors.forEach((n) => {
    console.log(n);
    
})

```

## Assignment :

Create a program that lists every 3rd number between 1-20 and prints it to the console.

### Solution :

```js
for (let i=3 ; i<=20 ; i=i+3){
    console.log(i);
    
}
```

