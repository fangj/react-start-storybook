import React from 'react';

export default class BlockViewControllerEditor extends React.Component {
  static propTypes = {
    block: React.PropTypes.object.isRequired,
    save:React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	
      </div>
    );
  }
}
