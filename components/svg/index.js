import React from 'react';
import SVG from 'svg.js';

export default class SvgShape extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div ref="svg"></div>
    );
  }

  componentDidMount() {
    var el=this.refs.svg;
    var draw = SVG(el).size(300, 300)
    var rect = draw.rect(100, 100).attr({ fill: '#f06' })
  }
}
