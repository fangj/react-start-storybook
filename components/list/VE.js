import React from 'react';

export default class VE extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>VE</div>
    );
  }
}
