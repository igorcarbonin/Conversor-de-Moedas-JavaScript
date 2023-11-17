const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // Valor em Real
    const currencyValueToConvertd = document.querySelector('.currency-value') // Outras moedas

    const dolarToday = 5.03
    const euroToday = 5.34
    const libraToday = 6.12

    const convertedValues = inputCurrencyValue / dolarToday

    if (currencySelect.value == 'dolar') { // Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == 'euro') { // Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == 'libra') { // Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }

    convertValues ()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)