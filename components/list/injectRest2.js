//采用promiseView完成下列注入
//inject restful api to component
//

// injectApi 
// <Component /> => <Component api/>

// injectValue
// <Component /> => <Component value />

// injectValueApi
// <Component /> => <Component value api/>

// injectApi
// Component=injectApi(url)(Component)
// injectValue
// Component=injectValue(url)(Component)
// injectValue
// Component=injectValueApi(url)(Component)

// Component=injectApi(url,{api:"api_prop_name",value:"value_prop_name"})

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

const _injectValue=(url,injectedV,names)=>{
  const api=restful(url);
  const promise=api.all();
  const V=pv(promise,names)(injectedV);
  return V;
}
const injectValue=(url,names)=>{
  return (injectedV)=>_injectValue(url,injectedV,names);
}

const _injectValueApi=(url,injectedV,names={api:"api"})=>{
  const api=restful(url);
  const promise=api.all();
  const V=pv(promise,names)(injectedV);
  return (props)=>{
    const others={};
    others[names.api]=api;
    return <V {...props} {...others}/>
  };
}

const injectValueApi=(url,names)=>{
  return (injectedV)=>_injectValueApi(url,injectedV,names);
}

export {injectApi,injectValue,injectValueApi}