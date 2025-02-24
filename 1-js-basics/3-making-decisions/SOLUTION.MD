## Challenge

```javascript
x = 10
if (x%5 == 0) {
	console.log("Divisible by 5");
} else {
	console.log("Not divisible by 5");
}
```

```javascript
x = 8
console.log(x%5 == 0 ? "Divisible by 5" : "Not divisible by 5");
```

I prefer using if else statements for understandability and I use ternary operator when the program code does not look good.

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

allStudents.forEach(v => {
	if (typeof(v) == 'string') {
		if (v != 'C-') {
			studentsWhoPass.push(v)
		}
	} else {
		if (v>3) {
			studentsWhoPass.push(v)
		}
	}
});
```