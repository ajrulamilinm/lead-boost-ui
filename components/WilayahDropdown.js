import React from 'react';
import Select from 'react-select';

const WilayahDropdown = ({ label, options, value, onChange }) => {
  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

  const selectedValue = options.find(option => option.value === value);

  return (
    <div>
      <label>{label}</label>
      <Select
        options={options}
        value={selectedValue}
        onChange={handleChange}
        isClearable
      />
    </div>
  );
};

export default WilayahDropdown;

