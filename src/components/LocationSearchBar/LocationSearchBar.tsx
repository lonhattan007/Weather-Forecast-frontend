import Select from 'react-select';
import VietNamProvinces from '@mocks/VietNamProvinces';
import { useState } from 'react';
import { useAppDispatch } from '@hooks/customReduxHooks';
import { addLocation } from '@stores/recentLocationsSlice';

const LocationSearchBar = (props: any) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const dispatch = useAppDispatch();

  const handleLocationChange = (selectedOption: any) => {
    setSelectedLocation(selectedOption.value);
    dispatch(addLocation(selectedOption.value));
  };

  return (
    <Select
      id={props.id}
      className='rounded'
      options={VietNamProvinces}
      value={VietNamProvinces.find((option) => option.value === selectedLocation)}
      onChange={handleLocationChange}
      placeholder='Search a location'
    />
  );
};

export default LocationSearchBar;
