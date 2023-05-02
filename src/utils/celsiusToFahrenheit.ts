/**
 *@param {number} tempC - The temperature in Celsius degree
 *@returns {number} The respective temperature in Fahrenheit degree
 */
export default function celsiusToFahrenheit(tempC: number): number {
  // This is the formula 
  return tempC * (9 / 5) + 32;
}
