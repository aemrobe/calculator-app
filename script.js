//selecting elements
const outputText = document.querySelector(".calc__output-result");
const buttonContainer = document.querySelector(".calc__buttons");
const buttons = document.querySelectorAll(".calc__button");

//intial values

let output = "";

outputText.textContent = output;

//function
const formatCurrency = function (value) {
  const num = new Intl.NumberFormat(navigator.language).format(value);

  return num;
};

buttonContainer.addEventListener("click", function (e) {
  const clickedElement = e.target.closest(".calc__button");

  output += clickedElement.textContent;

  outputText.textContent = output;

  console.log(output);
});

//understanding of the problem
/*
how to selecting of the elements 
how read the value when the number and operator are clicked
how to display the characters which are clicked into the screen
how we calculate the numbers 
how displaying the result when the equal sign is clicked
how to make the del and the reset button work work
*/

/*
dividing the problem
selecting of the elements 
read the value when the number and operator are clicked
how to display the characters in the screen
calculating the numbers 
displaying the result when the equal sign is clicked
make the del and the reset button work work
*/
