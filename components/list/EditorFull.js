import React from 'react';
import Editor from './Editor.js'
import MenuBar from './MenuBar.js'
const EditorMenuBar=({id})=>{
	const editItems=[{
	 _id:id, //要操作的数据对象id
	 action:"save", //操作
	 className:"fa fa-save" //保存数据并切换到展示试图
	},{
	 _id:id, //要操作的数据对象id
	 action:"cancel", //操作
	 className:"fa fa-remove" //取消修改并切换到展示试图
	}];
	return  <MenuBar items={editItems}/>;
}

export default class EditorFull extends React.Component {
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
      	<Editor ns={ns} data={data}/>
      	<EditorMenuBar id={data._id}/>
      </div>
    );
  }
}
