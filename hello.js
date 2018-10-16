// function definition: writing the recipe
function hello (person, language) {
  switch (language) {
    case "french":
      console.log("Bonjour, " + person + " !");
      break;

    default:
      console.log("Hello, " + person + "!");
      break;
  }
}
// function PARAMETERS are the variables
// that the function receives (person, language)


// function call (a.k.a. invocation): cooking the recipe 3 times
hello("Maya", "french");
hello("Marie", "french");
hello("Abi", "english");
// function ARGUMENTS are the inputs you provide
// when you CALL the function
// ("Maya", "Marie", "Abi", "french", "english")
