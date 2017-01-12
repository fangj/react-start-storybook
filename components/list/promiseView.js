//promiseView
//promiseView(promise)(View)
//promiseView(promise,{fulName:"value",rejName:"reason"})(View) //todo
//

import React from 'react';
var CP=require('make-cancelable');
var R=require('ramda');
class PromiseViewWrapper extends React.Component {
  static propTypes = {
    ___promise: React.PropTypes.func, //promise
    ___options:React.PropTypes.object,
    InjectedView:React.PropTypes.any,
  };
  static defaultProps = {
  	___promise:Promise.resolve,
  	___options:{fulName:"value",rejName:"reason"},
	InjectedView:()=>null
  };
  constructor(props) {
    super(props);
    this.state={};
  }

  componentDidMount() {
  	this.promise=CP(this.props.___promise);//使用cancelable promise以避免数据到来时组件已经unmount
  	this.promise.then(value=>this.setState({value}))
  		.catch(reason=>this.setState({reason}));
  }

  componentWillUnmount() {
  	this.promise && this.promise.cancel();
  }

  render() {
  	const {___promise,InjectedView,___options,...others}=this.props;
  	const {value,reason}=this.state;
  	if(typeof value===undefined && typeof reason===undefined){
  		return null;
  	}
  	if(reason===undefined){
  		others[___options.fulName]=value;
  	}else{
  		others[___options.rejName]=reason;
  	}
    return (<InjectedView {...others}/>);
  }
}

const _promiseView=(options,promise,InjectedView)=>{
	return (props)=><PromiseViewWrapper ___promise={promise} ___options={options} InjectedView={InjectedView} {...props}/>
}

const defaultOptions={fulName:"value",rejName:"reason"};
const promiseView=R.curry(_promiseView)(defaultOptions);
export default  promiseView;