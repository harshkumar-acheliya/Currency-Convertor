const currencyIcon = document.getElementById("currencyIcon");
const inputIcon=document.getElementById("inputGroup-sizing-default");
const convertedNo = document.getElementById("convertedNo");
const inputAmount = document.getElementById("inputAmount");
const btnConvert = document.getElementById("btnConvert");
const firstCountry = document.getElementById("allCountries1");
const secondCountry = document.getElementById("allCountries2");
btnConvert.addEventListener('click', () => {
    console.log(currencyIcon.value);
    fetch(`https://v6.exchangerate-api.com/v6/b30e6857586390308d8684a9/pair/${firstCountry.value}/${secondCountry.value}/${inputAmount.value}`)
        .then(resp => resp.json())
        .then((data) => {
            convertedNo.innerHTML = `${data.conversion_result}`;
            currencyIcon.innerHTML = `(${secondCountry.value})`;
            inputIcon.innerHTML = `${firstCountry.value}`;
        });
})





