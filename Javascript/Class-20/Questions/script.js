// -------------------- Q1

// function show() {
//   console.log(this);
// }
// show();

// --------------------- Q2 ------

// "use strict";
// function show() {
//   console.log(this);
// }
// show();

// ---------------------Q3-------------

// function getName() {
//   console.log(this.name);
// }
// var name = "Global";
// getName();

// ----------------------- Q4 ---------------

// function outer() {
//   function inner() {
//     console.log(this);
//   }
//   inner();
// }
// outer();


// ----------------- Q5 -----------------


// const obj = {
//   fn: function() {
//     function inner() {
//       console.log(this);
//     }
//     inner();
//   }
// }
// obj.fn();

// --------------------Q6 --------------
    
// const user = {
//   name: "Max",
//   show() {
//     console.log(this.name);
//   }
// }
// user.show();

// ----------------------Q7 --------------

// const user = {
//   name: "Max",
//   show: function() {
//     console.log(this);
//   }
// }
// const ref = user.show;
// ref();


// -------------------------Q8 -------------

// const data = {
//   value: 42,
//   info: {
//       get() {
//         console.log(this);
//         console.log(this.value);
//     }
//   }
// };
// data.info.get();


// ----------------------------Q9 ----------


// const person = {
//   name: "A",
//   greet() {
//     console.log(this.name);
//   }
// };

// const other = { name: "B", greet: person.greet };
// other.greet();

// ------------------------- Q10 ------------

function sum(a, b) {
  console.log(this.label, a + b);
}

sum.apply({ label: "Total1" }, [10, 20 ]);
sum.call({ label: "Total2" }, 20, 20 );
