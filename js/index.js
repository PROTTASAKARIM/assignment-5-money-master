function expanceBalanceCalculation() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = incomeInput.value;
    const foodInput = document.getElementById('food-input');
    const foodInputValue = foodInput.value;
    const rentInput = document.getElementById('rent-input');
    const rentInputValue = rentInput.value;
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputValue = clothesInput.value;
    const expanceTotal = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothesInputValue);
    const balanceTotal = parseFloat(incomeInputValue) - expanceTotal;

    const expanceTotalDisplay = document.getElementById('total-expance');
    expanceTotalDisplay.innerText = expanceTotal;
    const balanceTotalDisplay = document.getElementById('total-balance');
    balanceTotalDisplay.innerText = balanceTotal;
    return balanceTotal;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    expanceBalanceCalculation();
})
document.getElementById('save-btn').addEventListener('click', function () {
    const totalBalance = expanceBalanceCalculation();
    const saveInput = document.getElementById('save-input');
    const saveInputValue = saveInput.value;
    console.log(saveInputValue);
    console.log(typeof (saveInputValue));
})
