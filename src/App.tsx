import React, { useState } from 'react';

import { Select } from 'antd';

import { allRegions } from './constants';
import BreweryList from './BreweryList';

function App() {
  const [region, setRegion] = useState(allRegions[0]);

  function handleRegionSelect(e: string) {
    setRegion(e);
  }

  return (
    <div>
      <Select style={{width: 240}} defaultValue={region} onChange={handleRegionSelect}>
        {allRegions.map(r => (
          <Select.Option key={r} value={r}>{r}</Select.Option>
        ))}
      </Select>
      <BreweryList region={region} />
    </div>
  );
}

export default App;
