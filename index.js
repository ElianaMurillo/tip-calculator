setTimeout(
    () => {

        // TIP BUTTON STATUS
        const btnsTip = document.getElementsByClassName('btn-tip')
        if (btnsTip.length > 0) {
            for (let i = 0; i < btnsTip.length; i++) {
                btnsTip[i].addEventListener('click', () => {
                    let wasActive = false
                    for (let j = 0; j < btnsTip.length; j++) {
                        if (btnsTip[j].classList.contains('btn-active')) {
                            btnsTip[j].classList.remove('btn-active')
                            wasActive = i === j ? true : false // operador ternario
                        }   
                    }
                    if (!btnsTip[i].classList.contains('btn-active') && !wasActive) {
                        btnsTip[i].classList.add('btn-active')
                    } else {
                        btnsTip[i].classList.remove('btn-active')
                    }
                })
            }
        }

        
        // CALCULATE TIP
        function calculateTip() {
            const totalBill = parseFloat(document.getElementById('bill').value) // get total
            const numberOfPeople = parseFloat(document.getElementById('people').value) // get number of people
            const tip = 5
            const tipAmountPerPerson = (totalBill * tip/100) / numberOfPeople
            const totalPerPerson = (totalBill * (1 + (tip/100))) / numberOfPeople
            const tipAmount = document.getElementById('tip-amount')
            const totalAmount = document.getElementById('total-amount')
            tipAmount.innerText = tipAmountPerPerson
            totalAmount.innerText = totalPerPerson
        }
        document.getElementById('btn-reset').onclick = calculateTip
    }, 
    2000
)
