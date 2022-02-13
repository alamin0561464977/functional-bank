// ==================Please Deposit && Please withdraw===================
function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);

    depositInput.value = '';
    return depositAmount;
};

//================Deposit && Withdrow====================
function updateTotalField(alamin, depositAmount) {
    const depositTotal = document.getElementById(alamin);
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + depositTotalAmount;
};

//================Total Balance=======================
function TotalBalance(total, depositAmount, isAdd) {
    const balanceTotal = document.getElementById(total);
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + depositAmount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - depositAmount;
    }
};

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        // Deposit
        updateTotalField('deposit-total', depositAmount);

        // Balance+
        TotalBalance('balance-total', depositAmount, true);
    }
});

// Please withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmount = getInputValue('withdraw-input');
    if (withdrawInputAmount > 0) {
        // Withdrow
        updateTotalField('withdraw-total', withdrawInputAmount);

        // Balance-
        TotalBalance('balance-total', withdrawInputAmount, false);
    }
});
