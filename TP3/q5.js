function isATriangle(a, b, c){
    return a + b > c && b + c > a && c + a > b 
  }
  
function triangleTypeIdentifier(a, b, c){
    if (a === b && b === c) {
        return "Equilateral"
    } else if (a === b || b === c || c === a) {
        return "Isoceles"
    } else {
        return "Escalene"
    }
}

function q5InsertResult(result, resultId) {
    resultId.innerHTML = `<div class="result-content">
                            ${result} Triangle
                          </div>`
}

function q5Calculate() {
    let sideA = parseInt(document.getElementById("side-a").value)
    let sideB = parseInt(document.getElementById("side-b").value)
    let sideC = parseInt(document.getElementById("side-c").value)

    if (!isATriangle(sideA, sideB, sideC)) {
        window.alert("These side lengths doesn't form a triangle.")
        return false
    } 
    
    let result = triangleTypeIdentifier(sideA, sideB, sideC)
    let resultId = document.getElementById("result-q5")
    q5InsertResult(result, resultId)
}