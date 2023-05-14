// Ratio of 1 kmh to knot
const KMH_TO_KNOT_RATIO = 0.5399;
// Ratio of 1 km to mile
const KM_TO_MILE_RATIO = 0.6214;

// Lower bounds for Beaufort scale levels measured in kmh
enum BeaufortLowerLimits {
  Force0 = 0,
  Force1 = 2,
  Force2 = 6,
  Force3 = 12,
  Force4 = 20,
  Force5 = 29,
  Force6 = 39,
  Force7 = 50,
  Force8 = 62,
  Force9 = 75,
  Force10 = 89,
  Force11 = 103,
  Force12 = 118,
}

/**
 *@param {number} windSpeedKmh - The wind speed in km/h
 *@returns {number} The respective wind speed level in Beaufort scale
 */
function kmhToBeaufort(windSpeedKmh: number): number {
  if (windSpeedKmh < 0) {
    throw new Error('Invalid input for wind speed: speed cannot be negative!');
  }

  // The Beaufort scale includes 13 levels from 0 to 12, based on the wind speed range
  switch (true) {
    case windSpeedKmh >= BeaufortLowerLimits.Force12:
      return 12;
    case windSpeedKmh >= BeaufortLowerLimits.Force11:
      return 11;
    case windSpeedKmh >= BeaufortLowerLimits.Force10:
      return 10;
    case windSpeedKmh >= BeaufortLowerLimits.Force9:
      return 9;
    case windSpeedKmh >= BeaufortLowerLimits.Force8:
      return 8;
    case windSpeedKmh >= BeaufortLowerLimits.Force7:
      return 7;
    case windSpeedKmh >= BeaufortLowerLimits.Force6:
      return 6;
    case windSpeedKmh >= BeaufortLowerLimits.Force5:
      return 5;
    case windSpeedKmh >= BeaufortLowerLimits.Force4:
      return 4;
    case windSpeedKmh >= BeaufortLowerLimits.Force3:
      return 3;
    case windSpeedKmh >= BeaufortLowerLimits.Force2:
      return 2;
    case windSpeedKmh >= BeaufortLowerLimits.Force1:
      return 1;
    default:
      return 0;
  }
}

/**
 *@param {number} windSpeedKmh - The wind speed in km/h
 *@returns {number} The respective wind speed level in m/h
 */
function kmhToMph(windSpeedKmh: number): number {
  if (windSpeedKmh < 0) {
    throw new Error('Invalid input for wind speed: speed cannot be negative!');
  }

  return windSpeedKmh * KM_TO_MILE_RATIO;
}

/**
 *@param {number} windSpeedKmh - The wind speed in km/h
 *@returns {number} The respective wind speed level in knots
 */
function kmhToKnot(windSpeedKmh: number): number {
  if (windSpeedKmh < 0) {
    throw new Error('Invalid input for wind speed: speed cannot be negative!');
  }

  return windSpeedKmh * KMH_TO_KNOT_RATIO;
}

export { kmhToBeaufort, kmhToMph, kmhToKnot };
