import React from 'react';
import MenuBar from './MenuBar.js'
import Viewer from './Viewer.js'
const ViewerMenuBar=({id})=>{
	const viewItems=[{
	 _id:id, //要操作的数据对象id
	 action:"edit", //操作
	 className:"fa fa-edit" //编辑数据
	},{
	 _id:id, //要操作的数据对象id
	 action:"remove", //操作
	 className:"fa fa-trash" //删除数据
	}];
	return  <MenuBar items={viewItems}/>;
}

export default class ViewerFull extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {ns,data}=this.props;
    return (
      <div>
      	<Viewer ns={ns} data={data}/>
      	<ViewerMenuBar id={data._id}/>
      </div>
    );
  }
}
