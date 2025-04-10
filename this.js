// Problem 1
this.name = "Alex"
function introduce() {
    console.log(this.name);
  }
introduce("Alex");
 
// Task:
// Replace the name reference inside the function with this.name. 
// Then assign this.name = "Alex" in the global scope before calling the function (ignore the parameter when testing this).

// Q: What is printed? Why does this.name work (or not) in this context?
// It references this.name in global scope

// Problem 2

function runArrow(greeting) {
  this.greeting = "Hello!"
    const arrowFunc = () => {
      console.log(this.greeting);
    };
    arrowFunc();
  }
  runArrow("Hello!");

  
//   Task:
//   Replace greeting with this.greeting and assign this.greeting = "Hello!"; before calling the outer function.
  
//   Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore? 
//   this.greeting refer to hello. it doesnt refer to the paramter anymroe because we stopped using it.

// Problem 3
const display = {
    message: "This is from the object",
    show: function (param) {
      console.log(this.message);
    }
  };
  display.show("Passed argument");

//   Task:
// Replace param with this.message inside the function.

// Q: What is printed now? Why does this refer to the object? What happened to the argument?
//  "This is from the object" is now printed. The arguement is not used

// Problem 4
  function handleClick(text) {
    console.log(text);
  }

  document.getElementById("myBtn").onclick = () => {
    this.text = 'Clicked!'
    handleClick(this.text);
  };

// Task:
// Instead of passing "Clicked!", change handleClick() to use this.text, and assign this.text = "Clicked!"; inside the event function. Also try the same with an arrow function.

// Q: What does this.text refer to in each case? Why does the arrow function behave differently?
// refers to "Clicked!" and undefined. The arrow functions is not undefined.