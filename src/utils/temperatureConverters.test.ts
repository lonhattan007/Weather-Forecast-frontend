import { describe, it, expect } from 'vitest';
import { celsiusToFahrenheit } from './temperatureConverters';

describe('Convert Celsius to Fahrenheit temperature', () => {
  it('Test value 0', () => {
    const input = 0;

    let convertedValue = celsiusToFahrenheit(input);
    convertedValue = Math.round(convertedValue);

    expect(convertedValue).toBe(32);
  });

  it('Test positive value', () => {
    const input = 23;

    let convertedValue = celsiusToFahrenheit(input);
    convertedValue = Math.round(convertedValue);

    expect(convertedValue).toBe(73);
  });

  // Negative to positive
  it('Test negative value', () => {
    const input = -10;

    let convertedValue = celsiusToFahrenheit(input);
    convertedValue = Math.round(convertedValue);

    expect(convertedValue).toBe(14);
  });

  // Negative to negative
  it('Test absolute zero', () => {
    const input = -273.15;

    let convertedValue = celsiusToFahrenheit(input);
    convertedValue = Math.round(convertedValue);

    expect(convertedValue).toBe(-460);
  });
});
