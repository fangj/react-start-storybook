import React from 'react';
require('./bvcm.less')

export default class BVCM extends React.Component {
  static propTypes = {
    switchView: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {switchView}=this.props;
    return (
      <ul className="bvcm">
        <li onClick={()=>switchView("edit","txt")}>txt</li>
        <li onClick={()=>switchView("edit","img")}>img</li>
      </ul>
    );
  }
}
