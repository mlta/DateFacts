const chalk = require("chalk")
const moment = require("moment")
moment()

// 1. It is Tuesday, July 18th 2017, 2:07:48 pm
console.log(`It is ${chalk.blue(moment().format("LLLL"))}`)

// 2. It is the "x" day of the year.
console.log(`It is the ${chalk.cyan(moment().dayOfYear())} day of the year.`)

// 3. It is the "x" seconds into the day.
let now = moment()
let start = moment().startOf("day")
console.log(`It is the ${chalk.magenta(parseInt((now - start) / 1000))} seconds into the day.`)

//console.log(moment().startOf("day").format())

// 4. It is during Daylight Savings Time.
function Daylight() {
  let daylight = moment().isDST()
  if (daylight) {
    return "is"
  } else {
    return "is not"
  }
}
console.log(`It ${chalk.yellow(Daylight())} Daylight Savings Time.`)
// 5. It in not a leap year.
function isItLeapYear() {
  let leapYear = moment().isLeapYear()
  if (leapYear) {
    return "is"
  } else {
    return "is not"
  }
}
console.log(`It ${chalk.yellow(isItLeapYear())} a leap year.`)
