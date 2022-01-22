setTimeout(
    () => {

        // TIP BUTTON STATUS
        // obtiene todos los elementos con clase 'btn-tip'
        const btnsTip = document.getElementsByClassName('btn-tip')
        if (btnsTip.length > 0) {
            // si hay uno o más botones con la clase entonces...
            for (let i = 0; i < btnsTip.length; i++) {
                // recorra la lista  de botones, desde 0 a la cantidad -1 de botones

                // agregar un escuchador de eventos cuando se haga click
                btnsTip[i].addEventListener('click', () => {
                    let wasActive = false // variable para evaluar si estaba activo el botón
                    for (let j = 0; j < btnsTip.length; j++) {
                        // recorre todos los botones para evaluar si si debe quitar o ponerle la clase 'btn-active'
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
            // TIP FIXED
            let htmlColl = document.getElementsByClassName('btn-tip')
            let arrayBtns = Array.from(htmlColl)
            let tipSelected = 0
            let fixedTip = false
            arrayBtns.forEach(
                (btn) => {
                  if (btn.classList.contains('btn-active')) {
                      tipSelected = parseFloat(btn.innerText)
                      fixedTip = true
                  }
                }
            )

            // TIP CUSTOM
            let customInput = document.getElementById('custom').value

            if (customInput > 0) {
                tipSelected = customInput
            }

            return tipSelected
        }
        
        // CALCULATE TIP
        function calculateTip() {
            const totalBill = parseFloat(document.getElementById('bill').value) || 0 // get total
            const numberOfPeople = parseFloat(document.getElementById('people').value) || 1 // get number of people
            const tip = getTipSelected()
            const tipAmountPerPerson = (totalBill * tip/100) / numberOfPeople
            const totalPerPerson = (totalBill * (1 + (tip/100))) / numberOfPeople
            const tipAmount = document.getElementById('tip-amount')
            const totalAmount = document.getElementById('total-amount')
            tipAmount.innerText = tipAmountPerPerson.toFixed(1)
            totalAmount.innerText = totalPerPerson.toFixed(1)
        }

        // RESET BUTTON
        const reset = () => {
            document.getElementById('bill').value = 0
            document.getElementById('people').value = 0
            document.getElementById('custom').value = ""
            let btnsTip = Array.from(document.getElementsByClassName('btn-tip'))
            btnsTip.forEach((btn) => btn.classList.remove('btn-active'))
        }
        document.getElementById('btn-reset').onclick = reset
        
        // EVENT LISTENERS
        const billInput = document.getElementById('bill')
        billInput.addEventListener('input', () => {calculateTip()})
        
        const numberOfPeople = document.getElementById('people')
        numberOfPeople.addEventListener('input', () => {calculateTip()})

        const fixedTip = Array.from(document.getElementsByClassName('btn-tip'))
        fixedTip.forEach(() => addEventListener('click', () => {calculateTip()}))

        const customTip = document.getElementById('custom')
        customTip.addEventListener('input', () => {calculateTip()})

        
    }, 
    2000
)
