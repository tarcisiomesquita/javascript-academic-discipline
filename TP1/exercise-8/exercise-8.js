function isATriangle(a, b, c){
  return a + b > c && b + c > a && c + a > b 
}

function triangleTypeIdentifier(a, b, c){
  if (a === b && b === c) {
    return "equilateral"
  } else if (a === b || b === c || c === a) {
    return "isoceles"
  } else {
    return "escalene"
  }
}

let sideA = parseFloat(window.prompt("Enter the side 'a' of your triangle:"))
let sideB = parseFloat(window.prompt("Enter the side 'b' of your triangle:"))
let sideC = parseFloat(window.prompt("Enter the side 'c' of your triangle:"))

if (isATriangle(sideA, sideB, sideC)) {
  console.log(`These side lengths form an ${  triangleTypeIdentifier(sideA, sideB, sideC)} triangle.`)
} else {
  console.log("These side lengths doesn't form a triangle.")
}

