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

const _injectApi=(url,C)=>{
	const api=restful(url);
	return (props)=><C api={api} {...props}/> //返回注入了api的组件
}
const injectApi=R.curry(_injectApi);

export{injectApi}