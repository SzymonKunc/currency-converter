let currencyElement1 = document.querySelector(".js-currency-1");
let amountElement = document.querySelector(".js-amount");
let currencyElement2 = document.querySelector(".js-currency-2");
let resultElement = document.querySelector(".js-result");
let submitElement = document.querySelector(".js-submit");
let formElement = document.querySelector(".form");


formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    let amount = amountElement.value;
    let currency1 = currencyElement1.value;
    let currency2 = currencyElement2.value;
    let result;


    switch (currency1) {
        case "PLN":
            switch (currency2) {
                case "Euro":
                    result = amount / 4.4;
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = amount * 1;
                    resultElement.value = result.toFixed(2);
                    break;
            }
            break;
        case "Euro":
            switch (currency2) {
                case "Euro":
                    result = amount * 1;
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = amount * 4.4;
                    resultElement.value = result.toFixed(2);
                    break;
            }
            break;
    }
});