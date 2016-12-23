import React from 'react';

export default class BVCE extends React.Component {
  static propTypes = {
    switchView: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.save=this.save.bind(this);
  }

  render() {
    return (
      <div className="bvce"><div className="menubar">
      <button className="btn btn-default btn-xs"  onClick={this.save}><i className="fa fa-save"></i></button>
      </div>
      Editor</div>
    );
  }
  save(){
    const {switchView}=this.props;
    switchView("view")
  }
}
