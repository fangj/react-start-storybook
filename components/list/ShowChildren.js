import React from 'react';

export default class ShowChildren extends React.Component {
  static propTypes = {
    children: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	this.views={};
  	React.Children.forEach(this.props.children, (child,idx)=>{
  		const name=child.props.name||idx;
		this.views[name]=child;
  	})
    return (
      <div>{this.views[0]}</div>
    );
  }
}
