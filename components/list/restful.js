import agent from "axios";
var R = require('ramda');

const all=(url)=>agent.get(url).then(res=>res.data);
const get=(url,id)=>agent.get(url+'/'+id).then(res=>res.data);
const insert=(url,data)=>agent.post(url+'/'+id).then(res=>res.data);
const update=(url,id,data)=>agent.put(url+'/'+id,data).then(res=>res.data);
const remove=(url,id)=>agent.delete(url+'/'+id).then(res=>res.data);

module.exports=function(url){
	return {
		all:()=>all(url),
		get:(id)=>get(url,id),
		insert:(data)=>insert(url,data),
		update:(id,data)=>update(url,id,data),
		remove:(id)=>remove(url,id)
	}
}