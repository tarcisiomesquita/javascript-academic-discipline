
function averageCalculator(total, number){
  return total / number
}

const numberGrades = 4
let grade, totalGrades = 0
for (i = 0; i < numberGrades; i++) {
  let grade = window.prompt(`Enter your grade ${i+1}: `)
  totalGrades += parseFloat(grade)
  console.log(`Grade ${i+1}: ${grade}`)
}

console.log(`\nGPA: ${averageCalculator(totalGrades, numberGrades)}`)