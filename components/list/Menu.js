import React from 'react';

export default class Menu extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Menu</div>
    );
  }
}
