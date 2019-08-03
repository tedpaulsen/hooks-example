import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { List, Avatar } from 'antd';

import { OpenBreweryData } from './constants';

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
    <List
      dataSource={breweries}
      renderItem={(item: OpenBreweryData) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={
              <Avatar
                size={16}
                style={{ marginTop: 8 }}
                src={`https://www.google.com/s2/favicons?domain=${
                  item.website_url
                }`}
              />
            }
            title={item.name}
            description={item.city}
          />
        </List.Item>
      )}
    />
  );
}
