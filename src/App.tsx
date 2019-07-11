import React, { useState } from 'react';

import { allRegions } from './constants';
import BreweryList from './BreweryList';

function App() {
  const [region, setRegion] = useState(allRegions[0]);

  function handleRegionSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(e.currentTarget.value);
  }

  return (
    <div>
      <select value={region} onChange={handleRegionSelect}>
        {allRegions.map(region => (
          <option key={region}>{region}</option>
        ))}
      </select>
      <BreweryList region={region} />
    </div>
  );
}

export default App;
