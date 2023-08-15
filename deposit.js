let depositSum = 0;
let balanceSum = 1240;
document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const deposit = depositField.value;
  const depositTotal = document.getElementById("deposit-total");
  const balanceEl = document.getElementById("balance-total");

  if (deposit.length === 0) {
    alert("You haven't entered any amount to deposit.");
  } else {
    depositSum += parseFloat(deposit);
    depositTotal.innerText = "$" + depositSum;
    balanceSum += parseFloat(deposit);
    balanceEl.innerText = balanceSum;
    depositField.value = "";
  }
});
