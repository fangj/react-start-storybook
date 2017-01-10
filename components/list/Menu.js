import React from 'react';
import List from './List';
import CreateButton from './CreateButton';

export default class Menu extends React.Component {
  static propTypes = {
    pid:React.PropTypes.string, //父列表的id
    idx: React.PropTypes.number, //菜单块在父列表中的位置
  };
  static defaultProps = {
    pid:"pid"
    idx: 0,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {idx,pid}=this.props;
    var items=[{
      pid,
      idx,
      type:"text",
      name:"文字块",
    },{
      pid,
      idx,
      type:"image",
      name:"图片块",
    }];
    return (
      <List className="Menu" items={items}  ns="menu" ItemV={CreateButton}/>
    );
  }
}
