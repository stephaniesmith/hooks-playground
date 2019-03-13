import React, { Component } from 'react';
import axios from 'axios';

export class ResourceList extends Component {
  state = { resources: [] };

  componentDidMount = async() => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

    this.setState({ resources: data })
  }

  render() {
    return (
      <div>
        {this.state.resources.length}
      </div>
    );
  }
}

export default ResourceList;
