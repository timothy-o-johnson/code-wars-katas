/* The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

//var peopleInLine = [25, 50, 25, 100]
// var cashOnHand = {
//   100: 0,
//   50: 0,
//   25: 0
// }
// var currentPlaceInLine = 0
// var ticketCost = 25

function tickets (peopleInLine) {
  //var ticketCost = 25
  var cashOnHand = {
    100: 0,
    50: 0,
    25: 0
  }
  var currentPlaceInLine = 0

  return haveExactChange(cashOnHand, currentPlaceInLine, peopleInLine)
}

/**
 * adds bills to cashOnHand
 * @param {*} cashPayment
 */
function addCash (cashPayment, cashOnHand) {
  cashOnHand[cashPayment]++
}

/**
 * determine how many bills are needs, returns an arrray of different ways to return the funds
 * @param {*} changeNeeded
 */
function getBillsNeeded (changeNeeded) {
  var hundredsNeeded = 0
  var fiftiesNeeded = 0
  var twentyFivesNeeded = 0

  hundredsNeeded = Math.floor(changeNeeded / 100)
  changeNeeded = changeNeeded - hundredsNeeded * 100

  fiftiesNeeded = Math.floor(changeNeeded / 50)
  changeNeeded = changeNeeded - fiftiesNeeded * 50

  twentyFivesNeeded = Math.floor(changeNeeded / 25)
  changeNeeded = changeNeeded - twentyFivesNeeded * 25

  return [[fiftiesNeeded, twentyFivesNeeded], [0, fiftiesNeeded * 2 + twentyFivesNeeded]]
}

/**
 * determine if enough change, based on high denominations or low denominations
 * @param {*} billsNeeded
 * @param {*} denomination
 */
function exactChange (billsNeeded, denomination, cashOnHand) {
  var bills = billsNeeded[denomination]
  var enough50s = cashOnHand[50] >= bills[0] // 50s
  var enough25s = cashOnHand[25] >= bills[1] // 25s

  return enough50s && enough25s
}
/**
 * deduct cost of ticket (billsNeeded) from cashbox
 * @param {*} billsNeeded
 * @param {*} denomination
 */
function makeChange (billsNeeded, denomination, cashOnHand) {
  cashOnHand[50] -= billsNeeded[denomination][0]
  cashOnHand[25] -= billsNeeded[denomination][1]
}

function haveExactChange (cashOnHand, currentPlaceInLine, peopleInLine) {
  var _50s = cashOnHand[50]
  var _25s = cashOnHand[25]
  var denomination = 0
  var isExactChange = true
  var lastCustomer = currentPlaceInLine + 1 >= peopleInLine.length
  var billsNeeded
  var changeNeeded
  var ticketCost = 25

  var cashPayment = peopleInLine[currentPlaceInLine]
  addCash(cashPayment, cashOnHand)
  changeNeeded = cashPayment - ticketCost
  billsNeeded = getBillsNeeded(changeNeeded)
  isExactChange = exactChange(billsNeeded, denomination, cashOnHand)

  if (isExactChange && lastCustomer) {
    isExactChange = true
  } else if (isExactChange) {
    makeChange(billsNeeded, denomination, cashOnHand)
    // then see if we have the exact change for the next person in line
    isExactChange = haveExactChange(cashOnHand, currentPlaceInLine + 1, peopleInLine)

    // else if we don't have the exact change using 50s and 25s, lets try all 25s (denomination = 1))
  } else if (!isExactChange) {
    // reset cashOnHand, in case been altered in an earlier call
    cashOnHand[50] = _50s
    cashOnHand[25] = _25s
    denomination = 1 // all 25s

    isExactChange = exactChange(billsNeeded, denomination, cashOnHand)

    if (isExactChange && lastCustomer) {
      isExactChange = true // calling this out explicity for legibility
    } else if (isExactChange) {
      makeChange(billsNeeded, denomination, cashOnHand)
      // see if we have the exact change for the next person in line
      isExactChange = haveExactChange(cashOnHand, currentPlaceInLine + 1, peopleInLine)
    } else {
      isExactChange = false
    }
  } else {
    // if we can't make change...
    isExactChange = false
  }

  return isExactChange
}
//var peopleInLine = [25, 25, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100, 100, 50]

//console.log(tickets(peopleInLine))
//console.log(haveExactChange(cashOnHand, currentPlaceInLine))
 module.exports = tickets
