function insertResult(selector, result) {
  let tag = document.getElementById(selector)
  tag.innerText = result
}

function squareCalculator(number) {
  /* let result = document.getElementById("squareResult").value
  result.innerText  = */
  return Math.pow(number, 2)
}

function evenOrOddCalculator(number) {
  /*let result = document.getElementById("evenOrOddResult").value
  result.innerText = */
  return number / 2 === 0 ? "Even" : "Odd"
}

function fatorialCalculator(number) {
  /*let result = document.getElementByid("fatorialResult").value
  result.innerText = */

  let result = number
  let firstMultiplier = number - 1
  for (let i = firstMultiplier; i > 1; i--) {
    result *= i
  }
  return result
}

function cubeCalculator(number) {
  return Math.pow(number, 3)
}

function primeOrCompositeCalculator(number) {
  if (number === 1) {
    return "Netiher prime nor composite number"
  }else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return "Composite number"
      }
    }
  }
  return "Prime number"
}

function squareRootCalculator(number) {
  let squareRoot = Math.sqrt(number)
  return squareRoot == squareRoot.toFixed(2) ?squareRoot : squareRoot.toFixed(4) 
}

function showResults() {
  let number = parseInt(document.getElementById("number").value)

  insertResult("square-result", squareCalculator(number))
  insertResult("even-or-odd-result", evenOrOddCalculator(number))
  insertResult("fatorial-result", fatorialCalculator(number))
  insertResult("cube-result", cubeCalculator(number))
  insertResult("prime-or-composite-result", primeOrCompositeCalculator(number))
  insertResult("square-root-result", squareRootCalculator(number))
}


