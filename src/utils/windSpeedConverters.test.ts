import { describe, it, expect } from 'vitest';
import { kmhToBeaufort, kmhToMph, kmhToKnot } from './windSpeedConverters';

describe('Test converting wind speed KmH to Beaufort scale', () => {
  it('Test invalid input', () => {
    try {
      const input = -10;

      kmhToBeaufort(input);
    } catch (error: any) {
      expect(error.message).toBe('Invalid input for wind speed: speed cannot be negative!');
    }
  });

  it('Test force 0', () => {
    const input = 1;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(0);
  });

  it('Test force 1', () => {
    const input = 2;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(1);
  });

  it('Test force 2', () => {
    const input = 11.7;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(2);
  });
  0;

  it('Test force 3', () => {
    const input = 15.5;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(3);
  });

  it('Test force 4', () => {
    const input = 28;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(4);
  });

  it('Test force 5', () => {
    const input = 29;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(5);
  });

  it('Test force 6', () => {
    const input = 45.667;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(6);
  });

  it('Test force 7', () => {
    const input = 58.05;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(7);
  });

  it('Test force 8', () => {
    const input = 66.4;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(8);
  });

  it('Test force 9', () => {
    const input = 75.54;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(9);
  });

  it('Test force 10', () => {
    const input = 100;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(10);
  });

  it('Test force 11', () => {
    const input = 116;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(11);
  });

  it('Test force 12', () => {
    const input = 200;

    const convertedValue = kmhToBeaufort(input);

    expect(convertedValue).toBe(12);
  });
});

describe('Test converting wind speed in KmH to Mph', () => {
  it('Test invalid input', () => {
    try {
      const input = -10;

      kmhToMph(input);
    } catch (error: any) {
      expect(error.message).toBe('Invalid input for wind speed: speed cannot be negative!');
    }
  });

  it('Test value 0', () => {
    const input = 0;

    const convertedValue = kmhToMph(input);

    expect(convertedValue).toBe(0);
  });

  it('test value 1', () => {
    const input = 1;

    let convertedValue = kmhToMph(input);
    convertedValue = Math.round(convertedValue * 10) / 10;

    expect(convertedValue).toBe(0.6);
  });

  it('test random value', () => {
    const input = 12.6;

    let convertedValue = kmhToMph(input);
    convertedValue = Math.round(convertedValue * 10) / 10;

    expect(convertedValue).toBe(7.8);
  });
});

describe('Test converting wind speed in KmH to knots', () => {
  it('Test invalid input', () => {
    try {
      const input = -10;

      kmhToKnot(input);
    } catch (error: any) {
      expect(error.message).toBe('Invalid input for wind speed: speed cannot be negative!');
    }
  });

  it('Test value 0', () => {
    const input = 0;

    const convertedValue = kmhToKnot(input);

    expect(convertedValue).toBe(0);
  });

  it('test value 1', () => {
    const input = 1;

    let convertedValue = kmhToKnot(input);
    convertedValue = Math.round(convertedValue * 10) / 10;

    expect(convertedValue).toBe(0.5);
  });

  it('test random value', () => {
    const input = 12.6;

    let convertedValue = kmhToKnot(input);
    convertedValue = Math.round(convertedValue * 10) / 10;

    expect(convertedValue).toBe(6.8);
  });
});
