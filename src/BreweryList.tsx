import React, { useState, useEffect } from 'react';

import axios from 'axios';

const url = (region: string) =>
  `https://api.openbrewerydb.org/breweries?by_state=${region
    .toLowerCase()
    .replace(' ', '_')}`;

export default function BreweryList(props: { region: string }) {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    async function fetchBreweries(st: string) {
      axios.get(url(st)).then(res => {
        setBreweries(res.data);
      });
    }

    fetchBreweries(props.region);
  }, [props.region]);

  return (
    <div>
      {breweries.map((b: any) => (
        <div key={b.id}>{b.name}</div>
      ))}
    </div>
  );
}
