import React from 'react';

export default class BVCV extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.edit=this.edit.bind(this);
  }

  render() {
    return (
      <div className="bvcv">
      <div className="menubar">
      <button className="btn btn-default btn-xs"  onClick={this.edit}><i className="fa fa-edit"></i></button>
      </div>
      View</div>
    );
  }
  edit(){
    const {switchView}=this.props;
    switchView("edit")
  }
}
