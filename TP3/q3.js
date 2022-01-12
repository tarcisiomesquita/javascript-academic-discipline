class Student {
  constructor(id, score, status) {
    this.id = id
    this.score = score
    this.status = status
  }
}

function insertCaption() {
  let captionHTML = document.getElementsByTagName("caption")[0]
  captionHTML.innerHTML = `<p>Students Report</p>` 
}

function insertThead() {
  let theadHTML = document.getElementsByTagName("thead")[0]
  theadHTML.innerHTML = `<tr>
                          <th>Id</th>
                          <th>Score</th>
                          <th>Status</th>
                        </tr>`
}

insertTbody
function insertTbody(tBodyHTML, student) {
  let classStatus = student.status === "PASSED" ? "green-background" : "red-background"
  tBodyHTML.innerHTML += `<tr class=${classStatus}>
                            <td>${student.id}</td>
                            <td>${student.score}</td>
                            <td>${student.status}</td>
                          </tr>`
}

function insertTfoot(passed, failed){
  let tFootHTML = document.getElementsByTagName("tfoot")[0]
  tFootHTML.innerHTML = `<tr>
                            <th colspan="2">Students passed:</th>
                            <td>${passed}%</td>
                          </tr>
                          <tr>
                            <th colspan="2">Students failed:</th>
                            <td>${failed}%</td>
                          </tr>`
}

function createReport() {
  
  insertCaption()
  insertThead()

  let numberOfStudents = 20
  let average = 60
  let students = []
  for (let i = 1; i <= numberOfStudents; i++) {
    let student = new Student(id= i, 
                              score = Math.floor(Math.random() * 100),
                              status = score >= average ? "PASSED" : "FAILED")
    students.push(student)
  }
  let tBodyHTML = document.getElementsByTagName("tbody")[0]
  
  let passedCount = 0
  let failedCount = 0
  for (let student of students) {
    insertTbody(tBodyHTML, student)
    if (student.score >= average) {
      passedCount++
    }
    else {
      failedCount++
    }
}
  let passedPercent = Math.floor(passedCount/numberOfStudents * 100)
  let failedPercent = Math.floor(failedCount/numberOfStudents * 100)
  insertTfoot(passedPercent, failedPercent)
}