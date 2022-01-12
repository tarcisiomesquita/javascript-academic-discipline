function fatorialAndTimeCalculator(num){
    let beginTime = new Date().getMilliseconds()
    let fatorial = num
    let firstMultiplier = num - 1
    for (let i = firstMultiplier; i > 1; i--) {
      fatorial *= i
    }
    let endTime = new Date().getMilliseconds()
    let totalTime = endTime - beginTime
  
    return [fatorial, totalTime]
  }

  function q2InsertResult(number, fatorial, totalTime, resultId) {
      resultId.innerHTML = `<div class="result-content">
                              ${number}!: ${fatorial} (${totalTime} milliseconds)
                            </div>`        
  }

  function q2Calculate() {
      let number = parseInt(document.getElementById("fat-number").value)
      let [fatorial, totalTime] = fatorialAndTimeCalculator(number)
      let resultId = document.getElementById("result-q2")
      q2InsertResult(number, fatorial, totalTime, resultId)
  }