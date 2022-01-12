console.log("Starting Algorithm No. 1\n")

function multiplesCounter() {
  let count = 1
  for (let i = 2; i < 100; i++) {
    if ((i % 2 === 0) && i % 3 === 0) {
      count++
    }
  }
  return count
}

console.log(`Between 1 and 1.000.000 there are ${multiplesCounter()} numbers multiples of 2 and 3 simultaneously.`)

console.log("\nStarting Algorithm No. 2\n")

function fatorialAndTimeCalculator(num){
  let beginTime = new Date().getMilliseconds()
  let result = num
  for (let i = 1; i < num; i++) {
    result *= num - i
  }
  let endTime = new Date().getMilliseconds()
  let totalTime = endTime - beginTime

  return [result, totalTime]
}

let number = 53  
let [fatorial, time] = fatorialAndTimeCalculator(number)

console.log(`The fatorial of ${number} is ${fatorial} and it took ${time} milliseconds to calculate.`)

console.log("\nStarting Algorithm No. 3\n")

function createNumbersList(){
  let numbersList = []
  let number = 0
  while (numbersList.length < 1000) {
    number = Math.floor(Math.random() * 5000 + 1)
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

console.log(`Ordered list of 1000 numbers between 0 and 5000: [${orderNumbersList(createNumbersList())}]`)

console.log("\nStarting Algorithm No. 4\n")

function studentsRegistration() {
  let students = []
  let student = []
  let studentNumber, studentScore = 0
  for(let i = 1; i <= 20; i++) {
    studentNumber = i
    studentScore = Math.floor(Math.random() * 100) + 1
    student = [studentNumber, studentScore]
    students.push(student)
  }
  return students
}

function printStudentsReportCard(students) {
  let studentReportCard = ""
  let status = ""
  let passedCount = 0 
  let failedCount = 0
  for (let i = 0; i < students.length; i++){
    studentNumber = students[i][0]
    studentScore = students[i][1]
    studentReportCard = `Student No. ${studentNumber} - Score: ${studentScore} - `
    if (studentScore > 60) {
      studentReportCard += "[Passed]"
      passedCount++
    } else {
      studentReportCard += "[Failed]"
      failedCount++
    }
    console.log(studentReportCard)
  }
  console.log(`\nStudents Passed: ${passedCount} (${Math.floor((
  passedCount / 20) * 100)}%) | Students Failed: ${failedCount} (${Math.floor((failedCount / 20) * 100)}%)`)
}

printStudentsReportCard(studentsRegistration())

console.log("\nStarting Algorithm No. 5\n")

function triangleTypeClassifier(a, b, c){
  if (a === b && b === c) {
    return "equilateral"
  } else if (a === b || b === c || c === a) {
    return "isoceles"
  } else {
    return "escalene"
  }
}

console.log(`The side lenghts 5, 5, 5 form an ${triangleTypeClassifier(5,5,5)} triangle.`) 
console.log(`\nThe side lenghts 45, 45, 90 form an ${triangleTypeClassifier(45,45,90)} triangle.`)
console.log(`\nThe side lenghts 25, 35, 45 form an ${triangleTypeClassifier(25, 35, 45)} triangle.`)