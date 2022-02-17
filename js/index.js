//taking income input field in a function
function inputValue() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = incomeInput.value;
    return incomeInputValue;
}
function saveChanges() {
    const savingAmountField = document.getElementById('saving-amount');
    const remainingBalanceField = document.getElementById('remaining-balance');

    savingAmountField.innerText = 'Waiting for correct input';
    remainingBalanceField.innerText = 'Waiting for correct input';

}

function expanceBalanceCalculation() {
    const incomeInputValue = inputValue();

    const foodInput = document.getElementById('food-input');
    const foodInputValue = foodInput.value;

    const rentInput = document.getElementById('rent-input');
    const rentInputValue = rentInput.value;

    const clothesInput = document.getElementById('clothes-input');
    const clothesInputValue = clothesInput.value;

    const expanceTotalDisplay = document.getElementById('total-expance');
    const balanceTotalDisplay = document.getElementById('total-balance');
    const alartDisplay = document.getElementById('alart-paragraph');


    //validation for if the inputs are not number and if the numbers are greater then 0 
    if (typeof (parseFloat(incomeInputValue)) == "number" && parseFloat(incomeInputValue) > 0 && typeof (parseFloat(foodInputValue)) == "number" && parseFloat(foodInputValue) > 0 &&
        typeof (parseFloat(rentInputValue)) == "number" && parseFloat(rentInputValue) > 0 &&
        typeof (parseFloat(clothesInputValue)) == "number" && parseFloat(clothesInputValue) > 0) {


        const expanceTotal = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothesInputValue);
        const balanceTotal = parseFloat(incomeInputValue) - expanceTotal;

        //validation for if total expance id greater then income or not
        if (expanceTotal > incomeInputValue) {
            expanceTotalDisplay.innerText = 'Your expances are bigger then your income';
            balanceTotalDisplay.innerText = 'You have no balance';
            alartDisplay.style.display = 'block';
            saveChanges();
            return "No balance";
        }
        else {
            //if every requirements are fullfilled
            expanceTotalDisplay.innerText = expanceTotal;
            balanceTotalDisplay.innerText = balanceTotal;
            alartDisplay.style.display = 'none';
            return balanceTotal;
        }
    }
    else {
        //if the inputs are not number type and less then 0
        expanceTotalDisplay.innerText = 'Please give positive number as an input';
        balanceTotalDisplay.innerText = "Balance can't be calulated";
        alartDisplay.style.display = 'block';
        saveChanges();
        return 'No balance';
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
    const alartDisplay = document.getElementById('alart-paragraph');

    //if given inputs are correct and income and expance is calculated and if the given save % is correct
    if (typeof (parseFloat(saveInputValue) == 'number') && parseFloat(saveInputValue) > 0 &&
        typeof (parseFloat(totalBalance) == 'number') && parseFloat(totalBalance) > 0 &&
        typeof (parseFloat(incomeInputValue) == 'number') && parseFloat(incomeInputValue) > 0) {

        const savingAmount = parseFloat(incomeInputValue) * ((parseFloat(saveInputValue) / 100));
        const remainingBalance = totalBalance - savingAmount;

        //validation for if savings amount is grter then our current blance or not
        if (savingAmount > totalBalance) {
            savingAmountField.innerText = 'You can not save this much money';
            remainingBalanceField.innerText = 'There is no remaining balance';
            alartDisplay.style.display = 'block';
        }
        else {
            //if every requirements are full filled 
            savingAmountField.innerText = savingAmount;
            remainingBalanceField.innerText = remainingBalance;
            alartDisplay.style.display = 'none';
        }
    }
    else {
        //if inputs given are not correct

        savingAmountField.innerText = 'Check your input fields.Give correct input';
        remainingBalanceField.innerText = 'Remaining balance can not be calculated';
        alartDisplay.style.display = 'block';
    }



})
