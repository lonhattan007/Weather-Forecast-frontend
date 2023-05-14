import Select from 'react-select';
import VietNamProvinces from '@mocks/VietNamProvinces';
import { useState } from 'react';

const LocationSearchBar = (props: any) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (selectedOption: any) => {
    setSelectedLocation(selectedOption.value);
    console.log(selectedOption.value);
  };

  return (
    <Select
      id={props.id}
      options={VietNamProvinces}
      value={VietNamProvinces.find((option) => option.value === selectedLocation)}
      onChange={handleLocationChange}
      placeholder="Search a location"
    />
  );
};

export default LocationSearchBar;
