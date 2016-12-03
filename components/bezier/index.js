import React from 'react';
import BezierEditor from 'bezier-easing-editor';
export default class BE extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BezierEditor defaultValue={[0.2, 0.2, 0.8, 0.8]} onChange={console.log.bind(console)} />
    );
  }
}
