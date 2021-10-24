console.log("Exercise 2")
function fahrenheitToCelcius(fTemp){
  return 5 * (fTemp - 32) / 9
}

let fTemp = parseFloat(window.prompt("Enter a temperature in Fahrenheit:"))
let cTemp = fahrenheitToCelcius(fTemp)
console.log(`${fTemp} °F is ${cTemp.toFixed(2)} °C`)