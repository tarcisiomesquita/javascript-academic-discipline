function printGreeting(hour) {
  let midday, partDay = ""
  if (hour >= 12) {
    midday = "p.m"
    if (hour >= 18) {
      partDay = "night"
    } else {
      partDay = "afternoon"
    }
  }
  else {
    midday = "a.m"
    partDay = "morning"
  }
  console.log(`It's ${hour} ${midday}, good ${partDay}!`)
}

let date = new Date()
let hour = date.getHours()

printGreeting(hour)

