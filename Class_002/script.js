function toConvert() {

    var elementValue = document.getElementById("currencyValue");
    var currencyValue = elementValue.value;
    var valueInNumericDollar = parseFloat(currencyValue);

    var valueInBrl = valueInNumericDollar * 5;
    console.log(valueInBrl);
    
    var elementConvertedValue = document.getElementById("convertedValue");
    var convertedValue = "The result of currency in Brazilian Real (BRL) is: R$ " + valueInBrl;
    elementConvertedValue.innerHTML = convertedValue;
}