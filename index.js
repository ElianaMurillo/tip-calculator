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

        // GET TIP SELECTED
        const getTipSelected = () => {
            let htmlColl = document.getElementsByClassName('btn-tip')
            let arrayBtns = Array.from(htmlColl)
            let tipSelected = 0
            arrayBtns.forEach(
                (btn) => {
                  if (btn.classList.contains('btn-active')) {
                      tipSelected = parseFloat(btn.innerText)
                  }
                }
            )
            return tipSelected
        }
        
        // CALCULATE TIP
        function calculateTip() {
            const totalBill = parseFloat(document.getElementById('bill').value) // get total
            const numberOfPeople = parseFloat(document.getElementById('people').value) // get number of people
            const tip = getTipSelected()
            const tipAmountPerPerson = (totalBill * tip/100) / numberOfPeople
            const totalPerPerson = (totalBill * (1 + (tip/100))) / numberOfPeople
            const tipAmount = document.getElementById('tip-amount')
            const totalAmount = document.getElementById('total-amount')
            tipAmount.innerText = tipAmountPerPerson.toFixed(2)
            totalAmount.innerText = totalPerPerson.toFixed(2)
        }
        
        document.getElementById('btn-reset').onclick = calculateTip
    }, 
    2000
)
