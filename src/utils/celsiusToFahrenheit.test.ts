import { describe, it, expect } from 'vitest';
import celsiusToFahrenheit from './celsiusToFahrenheit';

describe('Convert Celsius to Fahrenheit temperature', () => {
  it('Test value 0', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  it('Test positive value', () => {
    expect(celsiusToFahrenheit(23)).toBe(73.4);
  });

  // Negative to positive
  it('Test negative value', () => {
    expect(celsiusToFahrenheit(-10)).toBe(14);
  });

  // Negative to negative
  it("Test absolute zero", () => {
    expect(celsiusToFahrenheit(-273.15)).toBe(-459.67)
  })
});
