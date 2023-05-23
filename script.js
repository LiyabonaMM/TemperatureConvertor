function temperatureConverter(valNum) {
    // Converts the input value to a floating-point number
    valNum = parseFloat(valNum);
  
    // Getting  the Celsius and Fahrenheit input elements
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    // Checking if the Celsius input is active
    if (document.activeElement === celsiusInput) {
      // Converting Celsius to Fahrenheit using the formula: (Celsius * 9/5) + 32
      const fahrenheit = (valNum * 9 / 5) + 32;
  
      // Setting the value of the Fahrenheit input with 2 decimal places
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
    // Checking if the Fahrenheit input is active
    else if (document.activeElement === fahrenheitInput) {
      // Converting Fahrenheit to Celsius using the formula: (Fahrenheit - 32) / 1.8
      const celsius = (valNum - 32) / 1.8;
  
      // Setting the value of the Celsius input with 2 decimal places
      celsiusInput.value = celsius.toFixed(2);
    }
  }
  