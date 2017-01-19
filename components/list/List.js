import React from 'react';
//用itemView渲染items列表
//className,style传递给容器，其他都传递给ItemView
//每个ItemV会得到独立的ns
const defaultItemView=({item,idx})=><pre key={idx}>{JSON.stringify(item)}</pre>;
const List=({ns="list",items=[],ItemView=defaultItemView,className,style,...others})=>
      <div className={className} style={style}>
        {items.map((item,idx)=><ItemView key={idx} item={item} idx={idx} ns={ns+"/"+idx} {...others}/>)}
      </div>
export default List;