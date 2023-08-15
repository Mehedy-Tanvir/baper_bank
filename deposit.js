document.getElementById("btn-deposit").addEventListener("click", function () {
  const balanceTotalEl = document.getElementById("balance-total");
  const previousBalance = parseFloat(balanceTotalEl.innerText);
  const depositField = document.getElementById("deposit-field");
  const deposit = parseFloat(depositField.value);
  const depositEl = document.getElementById("deposit-total");
  const previousDeposit = parseFloat(depositEl.innerText);

  if (deposit.length === 0) {
    alert("You haven't entered any amount to deposit.");
    depositField.value = "";
  } else if (deposit <= 0) {
    alert("Enter positive amount to deposit.");
    depositField.value = "";
  } else {
    depositEl.innerText = previousDeposit + deposit;
    balanceTotalEl.innerText = previousBalance + deposit;
    depositField.value = "";
  }
});
