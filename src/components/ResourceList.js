import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async() => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    setResources(data);
  }

  useEffect(() => {
    fetchResource();
  }, [resource]);

  return (
    <ul>
      {resources.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
    );
};

export default ResourceList;
