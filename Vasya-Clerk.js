/* The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

*/

function tickets (peopleInLine) {
  var ticketCost = 25
  var cashOnHand = {
    100: 0,
    50: 0,
    25: 0
  }
  var changeNeeded = 0
  var i
  var canSellToEachPerson = false
  var cashPayment = 0
  var billsNeeded = []
  var denomination = 1
  var enough = false

  for (i = 0; i < peopleInLine.length; i++) {
    cashPayment = peopleInLine[i]
    addCash(cashPayment)
    changeNeeded = cashPayment - ticketCost
    billsNeeded = getBillsNeeded(changeNeeded)
    
    if (exactChange (billsNeeded, denomination)) {
      makeChange(billsNeeded, denomination)
    }
  }
}

/**
 * adds bills to cashOnHand
 * @param {*} cashPayment
 */
function addCash (cashPayment) {
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
function exactChange (billsNeeded, denomination) {
  var bills = billsNeeded[denomination]
  var enough50s = cashOnHand[50] >= bills[0] // 50s
  var enough25s = cashOnHand[25] >= bills[1] // 25s

  return enough50s && enough25s
}


function makeChange (billsNeeded, denomination) {
  cashOnHand[50] -= billsNeeded[denomination][0]
  cashOnHand[25] -= billsNeeded[denomination][1]
}

var cashOnHand = {
  100: 0,
  50: 0,
  25: 3
}

var billsNeeded = getBillsNeeded(0)

billsNeeded

var enough = exactChange(billsNeeded, 0)

enough

makeChange(billsNeeded, 1)

cashOnHand