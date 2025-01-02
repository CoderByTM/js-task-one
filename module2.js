// Integer1

// let a = 2;
// let b = 3;
// let x = Math.sqrt(Math.sqrt((a**3 - b**3)+(a**3 + b**3)));
// console.log(x);

// let a = 8;
// let b = 5;
// let x = Math.sqrt(Math.sqrt((a**3 - b**3)+(a**3 + b**3)));
// console.log(x);


// Integer2

// let a = 4;
// let b = 9;
// let x = (1/6 * Math.sqrt(a) + 1/3 * Math.sqrt(b)) **2;
// console.log(x);

// Integer3

// let a = 231;
// let x = Math.floor(a / 100);
// let y = Math.floor((a % 100) / 10);
// let z = a % 10;
// let b = (z * 100) + (y * 10) + x;
// console.log(b);

// let a = 765;
// let x = Math.floor(a / 100);
// let y = Math.floor((a % 100) / 10);
// let z = a % 10;
// let b = (z * 100) + (y * 10) + x;
// console.log(b);

// Integer4

// let a = 345;
// let x = Math.floor(a / 100);
// let y = Math.floor((a % 100) / 10);
// let z = a % 10;
// let b = (y * 100) + (x * 10) + z;
// console.log(b);

// let a = 123;
// let x = Math.floor(a / 100);
// let y = Math.floor((a % 100) / 10);
// let z = a % 10;
// let b = (y * 100) + (x * 10) + z;
// console.log(b);

// let a = 555;
// let x = Math.floor(a / 100);
// let y = Math.floor((a % 100) / 10);
// let z = a % 10;
// let b = (y * 100) + (x * 10) + z;
// console.log(b);

// Integer5

// let a = 6.3;
// let b = 8.6;

// let result = 9 * Math.pow(a, 2) * b - 27 * Math.pow(a, 2) * Math.pow(b, 2) + 15 * Math.pow(b, 2);
// let x = Math.round(result * 100) / 100;
// console.log(x);

// let a = 4.5;
// let b = 9.6;

// let result = 9 * Math.pow(a, 2) * b - 27 * Math.pow(a, 2) * Math.pow(b, 2) + 15 * Math.pow(b, 2);
// let x = Math.round(result * 100) / 100;
// console.log(x);

// Integer6

// let r = 3;
// let n = 2;
// let a = 4;
// let b = 5;

// // let result = Math.pow(1 + r / 100, n) / Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// let result = (1 + r / 100) **n / Math.sqrt((a **2) + (b **2));

// console.log(result);

// Integer7

// let x1 = -1.4;
// let y1 = 7.9;
// let x2 = 6.1;
// let y2 = 9.9;

// let result = Math.sqrt((x2 - x1) **2 + (y2 - y1) **2);

// console.log(result);

// let x1 = -3.9;
// let y1 = -8.2;
// let x2 = -1.3;
// let y2 = -2.9;

// let result = Math.sqrt((x2 - x1) **2 + (y2 - y1) **2);

// console.log(result);

// Integer8

// function calculateTriangleProperties(x1, y1, x2, y2, x3, y3) {
//     // Function to calculate distance between two points
//     function distance(x1, y1, x2, y2) {
//         return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//     }

//     // Calculate the sides of the triangle
//     const a = distance(x1, y1, x2, y2);
//     const b = distance(x2, y2, x3, y3);
//     const c = distance(x3, y3, x1, y1);

//     // Calculate the perimeter
//     const P = (a + b + c).toFixed(2);

//     // Calculate the semi-perimeter
//     const p = (a + b + c) / 2;

//     // Calculate the area using Heron's formula
//     const S = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);

//     return { perimeter: parseFloat(P), area: parseFloat(S) };
// }

// // Input values
// let x1 = -9.7, 
//     y1 = -9.9;
// let x2 = 0.0, 
//     y2 = 2.9;
// let x3 = -0.1, 
//     y3 = 5.2;

// // Calculate and print the perimeter and area
// const result = calculateTriangleProperties(x1, y1, x2, y2, x3, y3);
// console.log("Perimeter:", result.perimeter);
// console.log("Area:", result.area);



// Integer9
// let a = -0.5;
// let x = Math.sin(a);
// console.log(x);

// Integer10

// let a = 0.5;
// let x = Math.cos(a);
// console.log(x);