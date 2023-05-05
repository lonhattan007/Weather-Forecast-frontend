const BAR_TO_ATM_RATIO = 0.9869;
// The bar to atm ratio divided by 1000
const MBAR_TO_ATM_RATIO = BAR_TO_ATM_RATIO / 1000;

/**
 *@param {number} airPressureMbar - The atmospheric pressure in millibar
 *@returns {number} The respective atmospheric pressure in atm
 */
function mbarToAtmosphere(airPressureMbar: number): number {
  if (airPressureMbar < 0) {
    throw new Error('Invalid input for atmospheric pressure: pressure cannot be negative!');
  }

  return airPressureMbar * MBAR_TO_ATM_RATIO;
}

export { mbarToAtmosphere };
