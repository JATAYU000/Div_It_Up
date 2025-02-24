# Data Types in a Shopping Cart

## Introduction
A shopping cart contains different data types to effectively manage UI, products, user and network. Here are some of the data types that may be useful for developing a shopping cart:

## Data Types

### 1. **String**
**Purpose:** To store data like user name, product name, locations etc...
**Example:**
```javascript
let userName = "Gokul";
let productName = "Pavillion HP Gaming Laptop"
```

### 2. **Array**
**Purpose:** To store different product objects in a cart, listing all products in the document
**Example:**
```javascript
let productList = [];
productList.push(myProduct);
```

### 3. **Boolean**
**Purpose:** To store values that represent true or false like the availability of product, user is logged in, free shipping etc...
**Example:**
```javascript
bool isAvailable = false;
if(!isAvailable)
{
	...
}
```

### 4. **Date**
**Purpose:** Date type can be used to display the delivery date, packaging date etc...
**Example:**
```javascript
const delivery = new Date("2025-03-10");
```

### 5. **Object**
**Purpose:** Object can be an instance of a Product class, which may contain information about count, price etc... An array of product objects are added to the cart.
**Example:**
```javascript
let product = new Product("Kurti", 299.9);
```

## Challenge

```javascript
NaN == NaN // false
Number.isNaN(NaN) // true

## Assignment
```
<input type="button" value="Go Back From Whence You Came!" onclick="history.back(-1)" />
```
