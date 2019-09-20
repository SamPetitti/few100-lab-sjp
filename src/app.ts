
let tipButtons: NodeListOf<HTMLInputElement>;
let currentTipAmount: any = 15;
export function runApp() {
    const enterAmountBox = document.getElementById('enter');
    enterAmountBox.addEventListener('input', calculateTip);
    tipButtons = document.querySelectorAll('.tipButton');
    tipButtons.forEach((btn: HTMLInputElement) => {
        btn.addEventListener('click', changeTipButton);
    });
    setCurrentTipAmount();
}


function calculateTip() {
    const totalEntered: number = (document.getElementById('enter') as HTMLInputElement).valueAsNumber;
    console.log(totalEntered);
    updateBillAmount(totalEntered);
    const amountToTip: number = (Number(totalEntered) * Number(currentTipAmount) * .01);

    document.getElementById('amountToTip').innerText = `Amount of Tip: $${amountToTip.toFixed(2)}`;
    const total = Number(amountToTip + totalEntered);
    document.getElementById('total').innerText = `Total to be paid: $${total.toFixed(2)}`;
}

function updateBillAmount(amount: any) {
    const billAmount = document.getElementById('billAmount');
    billAmount.innerText = `Bill Amount $${amount}`;
}

function changeTipButton() {
    tipButtons.forEach(tb => {
        tb.parentElement.classList.remove('active');
    });
    const clickedTip = this as HTMLInputElement;
    const clickedTipParent = clickedTip.parentElement;
    clickedTipParent.classList.add('active');
    setCurrentTipAmount();
    calculateTip();
}

function setCurrentTipAmount() {
    tipButtons.forEach(x => {
        if (x.parentElement.classList.contains('active')) {
            currentTipAmount = x.name;
            console.log(currentTipAmount + 'currentTipAmount');
            const tipPercentageBox = document.getElementById('tipPercentage');
            tipPercentageBox.innerText = `Tip Percentage: ${currentTipAmount}%`;
        }
    });
}

// export function runApp() {
//     // we are going to need a secret number 1 - 6
//     const secretNumber = getRandomInt(1, 6);
//     // mark one of the squares as the secret square.
//     squares = document.querySelectorAll('.square');
//     const playButton = document.getElementById('playAgain');
//     playButton.addEventListener('click', playAgain);
//     let currentSquare = 1;
//     squares.forEach((sq: HTMLDivElement) => {
//         if (currentSquare === secretNumber) {
//             sq.dataset.winner = 'true';
//         }
//         currentSquare++;
//         sq.addEventListener('click', handleClick);
//     });
// }



// function handleClick() {
//     const isWinner = this.dataset.winner === 'true';
//     const clickedSquare = this as HTMLDivElement;
//     if (isWinner) {
//         clickedSquare.classList.add('winner');
//         gameHeader.innerText = 'YOU WIN!';

//         squares.forEach(s => {
//             if (s !== clickedSquare) {
//                 s.classList.add('loser');
//             }
//             s.removeEventListener('click', handleClick);
//         });
//     } else {
//         clickedSquare.classList.add('loser');
//         gameHeader.innerText = 'LOSER!!';
//     }
// }
