document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  const withdrawTotalEl = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalEl.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalEl = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalEl.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount.length === 0) {
    alert("You haven't entered any amount to withdraw.");
    withdrawField.value = "";
  } else if (newWithdrawAmount <= 0) {
    alert("Enter positive amount to withdraw.");
    withdrawField.value = "";
  } else if (newWithdrawAmount > previousBalanceTotal) {
    alert("You don't have enough balance.");
    withdrawField.value = "";
  } else {
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalEl.innerText = currentWithdrawTotal;
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalEl.innerText = newBalanceTotal;
    withdrawField.value = "";
  }
});
