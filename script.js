const calculateRepaymentsButton = document.querySelector('.calculate')
const result = document.querySelector('.completed-result')
const waitingScreen = document.querySelector('.empty-result')
const monthlyPayment = document.querySelector('.result h1')
const repay = document.querySelector('.result h2')

calculateRepaymentsButton.addEventListener('click', () => {
    let mortgageAmount = document.querySelector('.mortgage-amount').value
    let mortgageTerm = document.querySelector('.mortgage-term').value
    let mortgageInterest = document.querySelector('.mortgage-interest').value

    //changing scenery
    result.style.display = "block"
    waitingScreen.style.display = "none"

    //calculations
    mortgageInterest = (mortgageInterest / 100) / 12
    mortgageTerm = (mortgageTerm * 12)

    let payment = mortgageAmount * ((mortgageInterest * ((1 + mortgageInterest) ** mortgageTerm)) / (((1 + mortgageInterest) ** mortgageTerm) - 1))
    console.log(payment)
    monthlyPayment.innerHTML = "£" + String(Math.round(payment * 100) / 100)

    let fullPayment = Number((payment * mortgageTerm))
    repay.innerHTML = "£" + String(Math.round(fullPayment * 100) / 100)

})