/* Task 1. Temperature converter
You are asked to implement a feature for a weather app. This feature takes the
temperature in Manila from the servers of PAGASA and converts it from one scale
to another.
//My First Assignments
Implement 2 functions:
convertToKelvin(tempCelsius) that converts Celsius to Kelvin 
Formula	---> 0°C + 273.15

convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin 
Formula	
(32°F − 32) × 5/9 + 273.15
*/

// Celsius to Kelvin -------------------------------------------
function convertToKelvinFromCelsius(tempCelsius) {
  return tempCelsius + 273.15;
}

console.log(convertToKelvinFromCelsius(25));
console.log(convertToKelvinFromCelsius(40));
console.log(convertToKelvinFromCelsius(0));

// Celsius to Kelven --------------------------------------------
function convertToKelvinFromFahrenheit(tempFahrenheit) {
  return ((tempFahrenheit - 32) * 5) / 9 + 273.15;
}

console.log(convertToKelvinFromFahrenheit(25));
console.log(convertToKelvinFromFahrenheit(40));
console.log(convertToKelvinFromFahrenheit(0));
