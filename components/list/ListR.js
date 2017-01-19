import React from 'react';
//
//(url,ItemView,ns)=>List
//url->promise
//使用promiseFactoryView和List组合

import promiseFactoryView from './promiseFactoryView';
import agent from "axios";
import List from "./List";
const getData=(url)=>agent.get(url).then(res=>res.data);

const ListR=({url,...others})=>{
  const InjectItems=promiseFactoryView(()=>getData(url),{value:"items"});
  const V=InjectItems(List);
  return <V {...others}/>;
};
export default ListR;
