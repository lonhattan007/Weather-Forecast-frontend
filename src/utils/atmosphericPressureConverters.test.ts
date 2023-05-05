import { describe, expect, it } from 'vitest';
import { mbarToAtmosphere } from './atmosphericPressureConverters';

describe('Test converting millibar to atm', () => {
  it('Test negative value', () => {
    try {
      const input = -5;

      mbarToAtmosphere(input);
    } catch (err) {
      expect(err.message).toBe('Invalid input for atmospheric pressure: pressure cannot be negative!');
    }
  });

  it('Test random value', () => {
    const input = 227;

    let convertedValue = mbarToAtmosphere(input);
    convertedValue = Math.round(convertedValue * 100) / 100;

    expect(convertedValue).toBe(0.22);
  });

  it('Test random value', () => {
    const input = 1010;

    let convertedValue = mbarToAtmosphere(input);
    convertedValue = Math.round(convertedValue * 100) / 100;

    expect(convertedValue).toBe(1);
  });
});
