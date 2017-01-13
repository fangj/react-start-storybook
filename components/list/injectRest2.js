//采用promiseView完成下列注入
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

//Component=injectApi(url,{api:"api_prop_name",value:"value_prop_name"})
//
import React from 'react';

var restful=require('./restful');
var pv=require('./promiseView');

//注入api
const _injectApi=(url,C)=>{
	const api=restful(url);
	return (props)=><C api={api} {...props}/> //返回注入了api的组件
}
//const injectApi=R.curry(_injectApi);
const injectApi=(url)=>{
	return (C)=>_injectApi(url,C);
}

const _injectData=(url,injectedV,names)=>{
	const api=restful(url);
	const promise=api.all();
	const V=pv(promise)(injectedV,names);
	return V;
}
const injectData=(url)=>{
	return (injectedV,names)=>_injectData(url,injectedV,names);
}

const _injectDataApi=(url,injectedV,names={api:"api"})=>{
	const api=restful(url);
	const promise=api.all();
	const V=pv(promise)(injectedV,names);
	return (props)=>{
		const others={};
		others[names.api]=api;
		return <V {...props} {...others}/>
	};
}

const injectDataApi=(url)=>{
	return (injectedV,names)=>_injectDataApi(url,injectedV,names);
}

export {injectApi,injectData,injectDataApi}