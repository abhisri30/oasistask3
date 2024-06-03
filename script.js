function convert() {

  const temperatureInput = document.getElementById('input').value;


  const resultDisplay = document.getElementById('result');

  const selectedUnit = document.querySelector('input[name="temp"]:checked');

  if (!selectedUnit) {
    resultDisplay.value = "Please select a conversion unit.";
    return; 
  }

 
  const temperatureValue = parseFloat(temperatureInput);
  
  if (isNaN(temperatureValue)) {
    resultDisplay.value = "Please enter a valid number.";
    return;
  }

  let convertedTemperature;

  switch (selectedUnit.value) {
    case 'celsius':
      convertedTemperature = `${temperatureValue} °C`;
      break;
    case 'fahrenheit':
      convertedTemperature = `${(temperatureValue * 9/5) + 32} °F`;
      break;
    case 'kelvin':
      convertedTemperature = `${temperatureValue + 273.15} K`;
      break;
    default:
      convertedTemperature = "Invalid conversion unit.";
  }
  resultDisplay.value = convertedTemperature;
}
