import React from 'react';
import List from './List';
import CreateButton from './CreateButton';
export default class Menu extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    var items=[{
      pid:"1",
      type:"text",
      name:"文字块",
      idx:0
    },{
      pid:"1",
      type:"image",
      name:"图片块",
      idx:0
    }];
    return (
      <List className="Menu" items={items}  ns="menu" ItemV={CreateButton}/>
    );
  }
}
