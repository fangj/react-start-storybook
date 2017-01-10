import React from 'react';
var _=require('lodash');

//接收(namespace,{show:component})，用于切换视图

//views用于描述所管理的子组件
//例如：views={a:A,b:B}
//其他组件发送PubSub.publish(ns,{show:'a'})来显示a组件
//ns 传递给所有子组件
//例如:A.ns
export default class Switcher extends React.Component {
  static propTypes = {
    views: React.PropTypes.object,//{key1:view1,key2:view2,...}
    defaultKey:React.PropTypes.string,//默认显示的组件
    ns:React.PropTypes.string,//组件的命名空间
  };
  static defaultProps={
    views:{},
    defaultKey:null,
    ns:"switcher"
  }

  state={
    key:this.props.defaultKey
  }

  constructor(props) {
    super(props);
    this.handleEvent=this.handleEvent.bind(this);
  }

  componentDidMount() {
    const {ns}=this.props;
    this.token=PubSub.subscribe(ns,this.handleEvent)
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  handleEvent(ns,evt){
    var key=evt.show;
    if(key){
      this.setState({key});
    }
  }

  render() {
    const {views,defaultKey,...others}=this.props;
    const keys=_.keys(views);
    if(keys.length===0){return null;}
    var {key}=this.state;
    if(!key){
      key=keys[0];//如果没有给出默认组件，则默认组件为第一个组件。
    }
    const V=views[key];
    return (
      V?<V {...others}/>:null
    );
  }
}
