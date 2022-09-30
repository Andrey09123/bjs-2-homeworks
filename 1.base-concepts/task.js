"use strict"  

function solveEquation(a, b, c) {
  let arr =[];
  // код для задачи №1 писать здесь
  if (a === 0) {
    arr[0] = -c / b;
    return arr;
  }
  let discr = Math.pow(b * b) - 4 * a * c;
  if (discr > 0) {
    arr[0] = parseInt(((-b + Math.sqrt(discr)) / (2 * a)).toFixed(0));
    arr[0] = parseInt(((-b - Math.sqrt(discr)) / (2 * a)).toFixed(0));
  }
  else if (discr === 0);
  arr[0] = -b / (2 * a)
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №2 писать здесь
    let totalAmount = 0;
    let loanRate = parseInt(percent) / 100;
    let firstPayment = parseInt(contribution);
    let creditAmount = parseInt(amount);
    if (Number.isNaN(loanRate)) {
      return totalAmount = `Параметр <название параметра> содержит неправильное значение "${percent}"`;
    }
    else if (Number.isNaN(firstPayment)) {
      return totalAmount = `Параметр <название параметра> содержит неправильное значение "${contribution}"`;
    }
    else if (Number.isNaN(creditAmount)) {
      return totalAmount = `Параметр <название параметра> содержит неправильное значение "${amount}"`;
    }
    let actualDate = newDate();
    let Parms = {
      rate: loanRate * 100,
      loanAmount: 0,
      monthsCount: 0,
      fullCost: 0
    }
    if ((date.getFullYear() >= actualDate.getFullYear()) && (date.getMonth() < 12) && (date.getMonth() >= 0) && (date.getDate() < 32) && (date.getDate() >= 1)) {
      Parms.loanAmount = creditAmount - firstPayment;
      Parms.monthsCount = (date.getFullYear() - actualDate.getFullYear()) * 12 + date.getMonth() - actualDate.getMonth();
      let annuityPayment = Parms.loanAmount * loanRate / 12 * (1 + 1 / (Math.pow(1 + loanRate / 12, Parms.monthsCount) - 1));
      Parms.fullCostOfFunds = (annuityPayment * Parms.monthsCount).toFixed(2);
      totalAmount = parseFloat(Parms.fullCostOfFunds);
    }
    else {
      totalAmount = 'Неверный формат даты. Дату необходимо указать в следующем формате - ДД.ММ.ГГГГ.';

  return totalAmount;
}
