How to solve the problem...

Set up files appropeiately.

Link the jQuery library and the randomColor.js in order to use the functions.

Create a form in the index html file that prompts users to enter some options for the pallete such as the the number of colors the hue and the brightness or luminosity. Check the validity of the user's input. The number of colors in the pallete should be an integer that is greater than 0 and maybe give it max limit. Give an error message otherwise. The hue and luminocity will have options to choose from a drop down list or could be left empty and applied a random value.

Create a submit button and a div which you can style as desired (either a box or a circle) that will display a color.

Create variables that get the data entered by the user when the form is submitted.

Use those variables as arguments for the randomColor function. For example randomColor({count: userNum; hue: userHue; luminosity: userLuminosity});

This will create an array which you can loop through using the jQuery $.each function.

In that loop, create a new div which you can assign a background color based on the return value of the randomColor function's hue and luminosity arguments. Append this newly created element to the initial div that was created in the index file.

Add an event object in jQuery so this function that was created is executed on a button click.
For example the syntax will be something like:
$('form').on('submit', function(event) {
  event.preventDefault();
  //code
});
