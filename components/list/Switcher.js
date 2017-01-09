import React from 'react';
var _=require('lodash');

//向子组件注入show函数，用于切换视图
export default class Switcher extends React.Component {
  static propTypes = {
    props: React.PropTypes.object,//传递给子组件的属性
    views: React.PropTypes.object,//{key1:view1,key2:view2,...}
    defaultKey:React.PropTypes.string,//默认显示的组件
  };
  static defaultProps={
    props:{},
    views:{},
    defaultKey:null
  }

  state={
    key:this.props.defaultKey
  }

  constructor(props) {
    super(props);
    this.show=(key)=>this.setState({key});
  }

  render() {
    const {props,views}=this.props;
    const keys=_.keys(views);
    if(keys.length===0){return null;}
    var {key}=this.state;
    if(!key){
      key=keys[0];//如果没有给出默认组件，则默认组件为第一个组件。
    }
    const V=views[key];
    return (
      <V {...props} show={this.show}/>
    );
  }
}
