let tipButtons: NodeListOf<HTMLInputElement>;
let currentTipAmount: any = 15;
const billAmount = document.getElementById('billAmount');
const enterAmountBox = document.getElementById('enter');
const tipMessage = document.getElementById('tipMessage');
export function runApp() {
    enterAmountBox.addEventListener('input', calculateTip);
    tipButtons = document.querySelectorAll('.tipButton');
    tipButtons.forEach((btn: HTMLInputElement) => {
        btn.addEventListener('click', changeTipButton);
    });
    setCurrentTipAmount();
}

function calculateTip() {
    let totalEntered: number = (document.getElementById('enter') as HTMLInputElement).valueAsNumber;
    if (isNaN(totalEntered)) {
        enterAmountBox.classList.remove('border', 'border-danger');
        totalEntered = 0.00;
    } else {
        if (totalEntered < 0) {
            enterAmountBox.classList.add('border', 'border-danger');
            totalEntered = 0.00;
        } else {
            enterAmountBox.innerText = totalEntered.toFixed(2);
            enterAmountBox.classList.remove('border', 'border-danger');
        }
    }
    updateBillAmount(totalEntered);
    const amountToTip: number = totalEntered * currentTipAmount * .01;

    document.getElementById('amountToTip').innerText = `Amount of Tip: $${amountToTip.toFixed(2)}`;
    const total = Number(amountToTip + totalEntered);
    document.getElementById('total').innerText = `Total to be paid: $${total.toFixed(2)}`;
}

function updateBillAmount(amount: any) {

    billAmount.innerText = amount === 0 ? `Bill Amount: $0.00` : `Bill Amount: $${amount}`;
}

function changeTipButton() {
    tipButtons.forEach(tb => {
        tb.parentElement.classList.add('active');
        tb.removeAttribute('disabled');
    });
    const clickedTip = this as HTMLInputElement;
    const clickedTipParent = clickedTip.parentElement;
    clickedTipParent.classList.remove('active');
    clickedTip.setAttribute('disabled', '');
    setCurrentTipAmount();
    calculateTip();
}

function setCurrentTipAmount() {
    tipButtons.forEach(x => {
        if (x.hasAttribute('disabled')) {
            currentTipAmount = x.name;
            const tipPercentageBox = document.getElementById('tipPercentage');
            tipPercentageBox.innerText = `Tip Percentage: ${currentTipAmount}%`;
        }
    });
    tipMessage.innerText = `You are tipping ${currentTipAmount}%`;
}



