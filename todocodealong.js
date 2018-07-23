// Chrome browser behaves a little strangely when using alert, prompt, or confirm functions. It doesn't display the HTML on the page until after the popup has been closed. This is problematic since our HTML contains instructions for the user to be able to use the app we're building.
//
// You can avoid this by wrapping your JS code in the following setTimeout function:
//
// window.setTimeout(function() {
//   // put all of your JS code from the lecture here
// }, 500);
// This gives the HTML a half second to load before running the JS, which circumvents the issue of the prompt function blocking the HTML from loading right away.

// Note, if you want to be able to access the todos variable from the chrome developer console then you'll need to put it in the global scope, see example below:
//
// var todos = ["Buy New Turtle"];
// window.setTimeout(function() {
//   // put all the rest of your JS code from the lecture here
// }, 500);

var todos = ["Buy new turtle"];

window.setTimeout(function() {

  var input = prompt("What would you like to do?");


  while(input !== "quit") {
    //handle input
    if(input === "list") {
      console.log(todos);
    }
    else if (input === "new") {
      //ask for new todo.
      var newTodo = prompt("Enter new todo");
      //add to todos array
      todos.push(newTodo);
    }

    //ask again for new input
    var input = prompt("What would you like to do?");
  }
  console.log("OK, You quit the app.");









}, 500);
