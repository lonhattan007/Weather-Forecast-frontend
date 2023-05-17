function fixLocationName(location: string): string {
  if (location === 'Dac Lac') {
    return 'Dak Lak';
  } else if (location === 'Dac Nong') {
    return 'Dak Nong';
  } else {
    return location;
  }
}

export { fixLocationName };
