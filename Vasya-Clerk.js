function tickets(peopleInLine){
  var ticketCost = 25
  var cashOnHand = {
    hundreds: 0,
    fifties: 0,
    twentyFives: 0
  }
  var changeNeeded = 0 
  var i
  var canSellToEachPerson = false
  var hundredsNeeded = 0
  var fiftiesNeeded = 0
  var twentyFivesNeeded = 0
  var cashPayment = 0
  
  for( i = 0; i < peopleInLine.length; i++){
  cashPayment = peopleInLine[i]
  cashOnHand = addCash(cashPayment, cashOnHand)
  
  
  changeNeeded = cashPayment - ticketCost
  
  
  hundredsNeeded = changeNeeded / 100
  changeNeeded = changeNeeded - (hundredsNeeded * 100)
  
  fiftiesNeeded = changeNeeded / 50
  changeNeeded = changeNeeded - (fiftiesNeeded * 50)
 
  twentyFivesNeeded = changeNeeded / 25
  changeNeeded = changeNeeded - (twentyFivesNeeded * 25)
  
  if (hundredsNeeded, fiftiesNeeded, twentyFivesNeeded, cashOnHand)
  
  function addCash (cashPayment, cashOnHand){
    switch (cashPayment){
      case 100:
        cashOnHand.hundreds++
        break
      case 50:
        cashOnHand.fifties++
        break
      case 25:
        cashOnHand.twentyFives++
        break   
    }
  
  return cashOnHand
  }
}