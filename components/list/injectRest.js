import React from 'react';

//inject restful api to component
//

//injectApi 
//<Component /> => <Component api/>
//
//injectData
//<Component /> => <Component data />

//injectDataApi
//<Component /> => <Component data api/>

//injectApi
//Component=injectApi(url)(Component)
//injectData
//Component=injectData(url)(Component)
//injectData
//Component=injectDataApi(url)(Component)
//todo
//Component=injectApi(url,{api:"api_prop_name",data:"data_prop_name"})

var R=require('ramda');
var restful=require('./restful');

//注入api
const _injectApi=(url,C)=>{
	const api=restful(url);
	return (props)=><C api={api} {...props}/> //返回注入了api的组件
}
const injectApi=R.curry(_injectApi);

//注入data
//ViewWrapper({url,InjectedView,props})=> render(<InjectedView data props/>)

var CP=require('make-cancelable');
class ViewWrapper extends React.Component {
  static propTypes = {
    restful_url_42: React.PropTypes.string, //故意使用较长的变量命名避免与用户的属性名冲突.42是宇宙的秘密
    InjectedView:React.PropTypes.any,
    injectApi:React.PropTypes.bool //是否注入api
  };
  static defaultProps = {
  	restful_url_42:"/",
	InjectedView:()=>null,
	injectApi:false 
  };
  constructor(props) {
    super(props);
    this.state={};
    this.api=restful(props.restful_url_42);
  }

  componentDidMount() {
  	const {restful_url_42}=this.props;
  	this.fetchAll=CP(this.api.all());//使用cancelable promise以避免数据到来时组件已经unmount
  	this.fetchAll.then(data=>this.setState({data}))
  }

  componentWillUnmount() {
  	this.fetchAll.cancel();
  }

  render() {
  	const {injectApi,restful_url_42,InjectedView,...others}=this.props;
  	const {data}=this.state;
  	if(typeof data===undefined){
  		return null;
  	}
    return (
    	injectApi?
    	<InjectedView data={data} api={this.api} {...others}/>:
    	<InjectedView data={data} {...others}/>
    );
  }
}
const _injectData=(injectApi,url,InjectedView)=>{
	return (props)=><ViewWrapper injectApi={injectApi} restful_url_42={url} InjectedView={InjectedView} {...props}/>
}
const injectData=R.curry(_injectData)(false);
const injectDataApi=R.curry(_injectData)(true);

export{injectApi,injectData,injectDataApi}