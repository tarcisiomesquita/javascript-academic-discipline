function validateNumbersQuantity(minValue, maxValue, numbersQuantity) {
    if (numbersQuantity > minValue + maxValue) {
        window.alert("Number's quantity must be less than the sum of maximum and minimum value")
        return true
    }
}

function createNumbersList(minValue, maxValue, numbersQuantity){
    let numbersList = []
    let number = 0
    while (numbersList.length < numbersQuantity) {
      number = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
      if (!numbersList.includes(number)) {
        numbersList.push(number)
      }
    }
    return numbersList
  }
  
function orderNumbersList(numbersList) {
    return numbersList.sort(function(a, b) {
        return a - b
    })
}

function q4InsertResult(numberList, resultId) {
    resultId.innerHTML = `<div class="result-content">
                            [${numberList}]
                          </div>`
}
 
function q4Calculate(){
    let numbersQuantity = parseInt(document.getElementById("numbers-quantity").value)
    let minValue = parseInt(document.getElementById("minimum-value").value)
    let maxValue = parseInt(document.getElementById("maximum-value").value)
    if (validateNumbersQuantity(minValue, maxValue, numbersQuantity)){
        return false
    }
    
    let numberList = createNumbersList(minValue, maxValue, numbersQuantity)
    
    numberList.sort(function(a, b) {
        return a - b
    })

    let resultId = document.getElementById("result-q4")
    q4InsertResult(numberList, resultId)
}