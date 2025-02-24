## Challenge ##

```javascript

let numbers = [1, 2, 3, 4]

// Normal for loop

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i] * 2);
}

// for each

numbers.forEach(num => console.log(num*2));

// map

console.log(numbers.map(num => num*2));

// for of

for(let num in numbers) {
	console.log(num*2);
}
```

## Assignment ##

```javascript

for(let i=1; i<=20; i++) {
	if (i%3 == 0) {
		console.log(i);
	}
}
