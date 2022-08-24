import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { activityOptions, locationOptions } from '../../helpers/filterList';

export const ActivityFilter: React.FC = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div className="filter-wrapper">
      <div className="filter-name">Activity: </div>
      <MultiSelect
        options={activityOptions}
        value={selected}
        onChange={setSelected}
        labelledBy="Select activity"
      />
    </div>
  );
};

export const LocationFilter: React.FC = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div className="filter-wrapper">
      <div className="filter-name">Location: </div>
      <MultiSelect
        options={locationOptions}
        value={selected}
        onChange={setSelected}
        labelledBy="Select location"
      />
    </div>
  );
};
