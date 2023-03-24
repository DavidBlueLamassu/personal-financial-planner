const incomeArray = [];
const expensesArray = [];
const nameArray = [];
const savingsArray = [];
let i = 0;


function acquireData() {
    console.log("test");
    let name = prompt("Please enter your name?");
    let save = prompt("Thank you " + name + ". Please enter the full amount of your current savings. Please only enter numbers.");
    if (isNaN(save)) { do {save = prompt("That is not a number " + name + " please try again.")} while (isNaN(save));
    }
    const nameObject = {subjectName: name};
    const saveObject = {savings: save};
    nameArray.push(nameObject);
    savingsArray.push(saveObject);
    console.log(savingsArray);
    incomeEntry();
    
}


function incomeEntry() {
    let incomeName = prompt("Please enter a name for your source of income (such as the name of your workplace).");
    let incomeAmount = prompt("Please enter your monthly income from this source. Please only enter numbers.")
    if (isNaN(incomeAmount)) { do {incomeAmount = prompt("That is not a number, please try again.")} 
    while (isNaN(incomeAmount));
    }
    const incomeObject = {title: incomeName, value: incomeAmount, color: colorSelector()};
    incomeArray.push(incomeObject);
    console.log(incomeArray);
    let incomeRepeat = prompt(`Would you like to add another source of income ${nameArray[0].subjectName}? Please enter "y" for yes or "n" for no.`)
    if (incomeRepeat !== "y" && incomeRepeat !== "n") {do {incomeRepeat = prompt(`Please enter "y" for yes or "n" for no.`)} 
    while (incomeRepeat !== "y" && incomeRepeat !== "n");
    } else if (incomeRepeat === "n") 
    {
        expensesEntry();
    } else if (incomeRepeat === "y") { 
        incomeEntry();
    }
}

function expensesEntry() {
    let expensesName = prompt(`Please enter a name for one of your expenses (for example "rent").`);
    let expensesAmount = prompt(`Please indicate the amount you spend on this expenditure. Please only enter numbers.`);
    if (isNaN(expensesAmount)) { do {expensesAmount = prompt("That is not a number, please try again.")} 
    while (isNaN(expensesAmount));
    }
    const expensesObject = {title: expensesName, value: expensesAmount, color: colorSelector()};
    expensesArray.push(expensesObject);
    let expensesRepeat = prompt(`Would you like to add another expense? Please enter "y" for yes or "n" for no.`);
    if (expensesRepeat !== "y" && expensesRepeat !== "n") {do {expensesRepeat = prompt(`Please enter "y" for yes or "n" for no.`)} 
    while (expensesRepeat !== "y" && expensesRepeat !== "n");
    } else if (expensesRepeat === "n") 
    {
        alert(`Thank you ${nameArray[0].subjectName}. We now have all the information we need.`);
        jsonStorage();

    } else if (expensesRepeat === "y") { 
        expensesEntry();
    }
}

function jsonStorage() {
    localStorage.setItem("name", JSON.stringify(nameArray));
    localStorage.setItem("savings", JSON.stringify(savingsArray));
    localStorage.setItem("income", JSON.stringify(incomeArray));
    localStorage.setItem("expenses", JSON.stringify(expensesArray));
    console.log(nameArray);
    console.log(savingsArray);
    console.log(incomeArray);
    console.log(expensesArray);
}

function colorSelector() {
    const colorArray = ['#F71A05', '#F9D3EE', '#F78F05', '#E5D3F9', '#F7C805', '#F4F705', '#B1F705', '#2DF705', '#05F784', '#05F7C0', '#05F5F7',
         '#05ABF7', '#055DF7', '#8605F7', '#CD05F7', '#F705D6', '#F70597', '#F70548', '#F9DAD3', '#D9F9D3', '#D3F9EC', 
         '#D3ECF9']
    i++;
    if (i === 21) {i = i-21};
    let colorPicked = colorArray[i];
    console.log(colorPicked);
    return colorPicked;
}

export default acquireData; 