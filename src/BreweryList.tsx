import React, { useState, useEffect } from 'react';

import axios from 'axios';

const url = (region: string) =>
  `https://api.openbrewerydb.org/breweries?by_state=${region
    .toLowerCase()
    .replace(' ', '_')}`;

interface Props {
  region: string;
  setLoading: (loading: boolean) => void;
}

export default function BreweryList(props: Props) {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    props.setLoading(true);
    async function fetchBreweries(st: string) {
      axios.get(url(st)).then(res => {
        setBreweries(res.data);
        props.setLoading(false);
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
