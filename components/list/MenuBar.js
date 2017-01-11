import React from 'react';
import List from './List';

require('./MenuBar.less')

const MenuBarButton=({item,idx})=>{
	const {_id,action,className}=item;
	return (<button 
		key={idx} 
		className="btn btn-default btn-xs"  
		onClick={()=>PubSub.publish(_id,{action})}>
		<i className={className}/>
	</button>)
}

//_id:内容块id
//	const items=[{
// 	_id, //要操作的数据
// 	action:"save", //操作
// 	className:"fa fa-edit" //按钮图标
// }];
const MenuBar=({items})=>{
    return (
      <List className="MenuBar" items={items} ItemV={MenuBarButton}/>
    );
}

export default MenuBar;