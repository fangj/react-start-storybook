import React from 'react';
require('./CreateButton.less');

export default class CreateButton extends React.Component {
  static propTypes = {
    item:React.PropTypes.object
  };
  static defaultProps = {
  	item:{
	  	idx:0 ,
	  	pid:'0',
	  	type:'text',
	  	name:'文字块'
	  }
  };
  constructor(props) {
    super(props);
  }

  render() {
  	const {item}=this.props;
    return (
      <div className="CreateButton" onClick={()=>PubSub.publish('create',item)}>{item.name}</div>
    );
  }
}
