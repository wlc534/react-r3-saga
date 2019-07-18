import React, { useState, useEffect } from "react";
import { Input } from 'antd';
import axios from 'axios';

const { Search } = Input;

function SearchResults() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('react');

  useEffect(() => {
    let ignore = false;
    console.log(query)

    async function fetchData() {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, [query]);

  const getData=(value)=>{
    async function fetch() {
      const json=await axios ('https://hn.algolia.com/api/v1/search?query=' + value);
      setData(json.data);
      console.log(json.data);
    }
    fetch();
  }

  return (
    <div>
      {/* <input value={query} onChange={e => setQuery(e.target.value)} /> */}
      <Search
      defaultValue={query}
      placeholder="input search text"
      enterButton="Search"
      onSearch={value => {setQuery(value)}}
    />
      <Search
      placeholder="input search text"
      enterButton="Search"
      onSearch={value => getData(value)}
    />{query}
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;


