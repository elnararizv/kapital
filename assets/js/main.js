const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');
const showBtn = document.querySelector('#showBtn');
const balanceEl = document.querySelector('#balanceEl');
const listTable = document.querySelector('#list');
const input = document.querySelector('#moneyInput');

let balance = 0;
let history = [];
let limit=10000

incrementBtn.addEventListener('click', function() {
    const money = parseInt(input.value);
    if (!isNaN(money) && money > 0 && money+balance<=limit) {
        income(money);
        showTable();
    } else {
        alert("Try again!! Please enter a valid amount.");
        input.value= ""
    }
});

decrementBtn.addEventListener('click', function() {
    const money = parseInt(input.value);
    if (!isNaN(money) && money > 0 && money <= balance) {
        expense(money);
        showTable();
    } else {
        alert("Please try again!!");
        input.value=""
    }
});

function income(money) {
    balance += money;
    balanceEl.textContent = balance;
    const operation = {
        type: 'Cash',
        amount: `+ ${money}`,
        created: new Date().toLocaleString()
    };
    history.push(operation);
    input.value = "";
}

function expense(money) {
    balance -= money;
    balanceEl.textContent = balance;
    const operation = {
        type: 'Cash',
        amount: `- ${money}`,
        created: new Date().toLocaleString()
    };
    history.push(operation);
    input.value = "";
}

function showTable() {
    listTable.innerHTML = "";
    history.forEach(function(operation, index) {
        listTable.innerHTML += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${operation.type}</td>
            <td class="amount">${operation.amount}</td>
            <td>${operation.created}</td>
        </tr>`;
    });
   
}
