


const obj = {
    name: 'Max',
    method: function () {
        // console.log(this) -> it would point to obj
        const greet = () => {
            console.log(this.name);
        }
        greet();
    },
    sayHello: () => {
        console.log(this);
    }
}

// obj.sayHello();

// obj.method();


// ----------------------------------Q1 ----------


// const user = {
//   name: "Max",
//   showLater() {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 100);
//   }
// };
// user.showLater();


// -------------------------------

const button = {
  label: "Click Me",
  click: function() {
    document.addEventListener("click", () => {
      console.log(this.label);
    });
  }
};

button.click();



