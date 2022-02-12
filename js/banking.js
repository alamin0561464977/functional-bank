function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);

    depositInput.value = '';
    return depositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue();

    // Please Deposit
    // const depositInput = document.getElementById('deposit-input');
    // const depositText = depositInput.value;
    // const depositAmount = parseFloat(depositText);

    // Deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + depositTotalAmount;

    // Balance+
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = depositAmount + balanceTotalAmount;


});

// Please withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    // Withdrow
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawInputAmount + withdrawTotalAmount;

    // Balance-
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount;

    withdrawInput.value = '';

    // console.log(withdrawTotalAmount);
});