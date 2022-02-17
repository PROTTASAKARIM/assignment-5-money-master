function inputValue() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = incomeInput.value;
    return incomeInputValue;
}

function expanceBalanceCalculation() {
    const incomeInputValue = inputValue();
    const foodInput = document.getElementById('food-input');
    const foodInputValue = foodInput.value;
    const rentInput = document.getElementById('rent-input');
    const rentInputValue = rentInput.value;
    const clothesInput = document.getElementById('clothes-input');
    const expanceTotalDisplay = document.getElementById('total-expance');
    const balanceTotalDisplay = document.getElementById('total-balance');
    const clothesInputValue = clothesInput.value;

    if (typeof (parseFloat(incomeInputValue)) == "number" && parseFloat(incomeInputValue) > 0 && typeof (parseFloat(foodInputValue)) == "number" && parseFloat(foodInputValue) > 0 &&
        typeof (parseFloat(rentInputValue)) == "number" && parseFloat(rentInputValue) > 0 &&
        typeof (parseFloat(clothesInputValue)) == "number" && parseFloat(clothesInputValue) > 0) {

        const expanceTotal = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothesInputValue);
        const balanceTotal = parseFloat(incomeInputValue) - expanceTotal;


        expanceTotalDisplay.innerText = expanceTotal;
        balanceTotalDisplay.innerText = balanceTotal;
        return balanceTotal;
    }
    else {

        expanceTotalDisplay.innerText = 'Please give positive number as an input';
        balanceTotalDisplay.innerText = "Balance can't be calulated";
        return balanceTotal = 'No balance';
    }

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    expanceBalanceCalculation();
})
document.getElementById('save-btn').addEventListener('click', function () {

    const incomeInputValue = inputValue();
    const totalBalance = expanceBalanceCalculation();
    const saveInput = document.getElementById('save-input');
    const saveInputValue = saveInput.value;
    const savingAmountField = document.getElementById('saving-amount');
    const remainingBalanceField = document.getElementById('remaining-balance');

    if (typeof (parseFloat(saveInputValue) == 'number') && parseFloat(saveInputValue) > 0 &&
        typeof (parseFloat(totalBalance) == 'number') && parseFloat(totalBalance) > 0 &&
        typeof (parseFloat(incomeInputValue) == 'number') && parseFloat(incomeInputValue) > 0) {

        const savingAmount = parseFloat(incomeInputValue) * ((parseFloat(saveInputValue) / 100));
        savingAmountField.innerText = savingAmount;

        const remainingBalance = totalBalance - savingAmount;
        remainingBalanceField.innerText = remainingBalance;
    }
    else {
        savingAmountField.innerText = 'Give positive number as an input';
        remainingBalanceField.innerText = 'Remaining balance can not be calculated';
    }



})
