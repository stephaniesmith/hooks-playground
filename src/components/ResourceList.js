import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(
    () => {
    (async() => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  
      setResources(data)
    })(resource);
    },
    [resource]
  );
  
  return resources;
}

const ResourceList = ({ resource }) => {

  useResources(resource);

  return (
    <ul>
      {resources.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  );
};

export default ResourceList;
