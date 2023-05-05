/**
 *@param {number} tempC - The temperature in Celsius degree
 *@returns {number} The respective temperature in Fahrenheit degree
 */
function celsiusToFahrenheit(tempC: number): number {
  // This is the formula to convert a degree in Celsius fo Fahrenheit scale
  return Math.round(tempC * (9 / 5) + 32);
}

export { celsiusToFahrenheit };
