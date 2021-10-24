function printReportCard(total, number) {
  let average = total / number
  let status = "" 
  if (average === 10.0) {
    status = "Passed with Distinction"
  } else if (average >= 7.0 ) {
    status = "Passed"
  } else {
    status = "Failed"
  }
  console.log(`\nGPA: ${average} \nStudent status: ${status}`)
}

const numberGrades = 2
let grade, totalGrades = 0
for (let i = 0; i < numberGrades; i++) {
  grade = parseFloat(window.prompt(`Enter your grade ${i+1}: `))
  totalGrades += grade
  console.log(`Grade ${i+1}: ${grade}`)
}

printReportCard(totalGrades, numberGrades)