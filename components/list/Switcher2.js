import React from 'react';
var _=require('lodash');

export default class Switch2 extends React.Component {

  static propTypes = {
    children: React.PropTypes.array,
    defaultName:React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),//默认显示的组件名
  };

  constructor(props) {
    super(props);
    this.show=(name)=>this.setState({name});
    this.state={name:this.props.defaultName};
    this.updateViews();
  }

  updateViews(){
    const me=this;
    this.views={};
    React.Children.forEach(this.props.children, (child,idx)=>{
      const name=child.props.name||idx;
      if(idx==0 && me.props.defaultName===undefined){
        this.state.name=name; //默认name不在的情况下，使用第一项的name
      }
      me.views[name]=React.cloneElement(child, {
        show: me.show  //注入show函数
      });
    });
    console.log("me.views",me.views)
  }

  render() {
    if(React.Children.count(this.props.children)==0){
      return null; //没有子元素返回空
    }
    const {name}=this.state;
    if(!this.views[name]){
      return null;//没有匹配的子元素返回空
    }
    return this.views[name]; //返回匹配的元素
  }
}
