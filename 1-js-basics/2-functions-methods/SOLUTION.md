## Challenge
Functions and methods are very similar but they differ in OOP. Functions defined in a class is known as methods. Functions are independent of any class.


## Assignment
```javascript
function say() {
	console.log("Hello world!");
}

say();
```

```javascript
function greet(name = "User") {
	console.log("Hello " + name + "!");
}

greet("Nandu");
```

```javascript

function isOdd(n) {
	return n & 1;
}

if (isOdd(5)) {
	console.log("5 is an odd number!");
} else {
	console.log("5 is an even number!");
}
```

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(5, 6, 2, 3))
```