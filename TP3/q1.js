function inputValidator(minValue, maxValue) {
  if (isNaN(minValue)) {
    window.alert("The minimum value field must be filled")
    return true
}
  if (isNaN(maxValue)) {
    window.alert("The maximum value field must be filled")
    return true
}
  if (maxValue <= minValue) {
    window.alert("Maximum value must be greater than minimum value")
    return true
  }
}

function multiplesCounter(minValue, maxValue) {
    let count = 0
    for (let i = minValue + 1; i < maxValue; i++) {
      if ((i % 2 === 0) && i % 3 === 0) {
        count++
      }
    }
     return count
  }

  function q1InsertResult(result, resultId) {
    resultId.innerHTML = `<div class="result-content">
                            ${result} numbers
                          </divs>`
   
  }

  function validateMaximumValue() {
    let minValue = parseInt(document.getElementById("min-value").value)
    let maxValue = parseInt(document.getElementById("max-value").value)
    if (maxValue <= minValue) {
      window.alert("Maximum value must be greater than minimum value")
      document.getElementById("max-value").value = NaN
      return true
    }
  }

  function q1Calculate() {
    let minValue = parseInt(document.getElementById("min-value").value)
    let maxValue = parseInt(document.getElementById("max-value").value)
    if (inputValidator(minValue, maxValue)) {
      return false
    }
    let result = multiplesCounter(minValue, maxValue)
    let resultId = document.getElementById("result-q1")
    q1InsertResult(result, resultId)
  }