import React from 'react';

//Editor(ns,data)
//=>id,{action:save} 保存数据,切换为viwer
//=>id,{action:cancel} 不保存数据,切换为viwer


//负责对data的编辑
//data={_id,type,data}
//用EditorCore负责真正的数据编辑
//EditorCore(defaultValue,onChange)
//EditorCore接受一个默认值defaultValue和数据变化时的回调函数
//和textarea的签名类似，但是onChange参数是data不event
// const TextEditorCore=(props)=><textarea {...props}/>; 
//
// 收到save消息:保存数据后向ns发出show:"viewer" 切换为展示组件
// 收到cancel消息:不保存数据，向ns发出show:"viewer" 切换为展示组件
// save和menu消息由MenuBar发出
// 
//Editor 根据data.type决定用什么EditorCore 

import TextEditorCore from './TextEditorCore';
import MarkdownEditorCore from './MarkdownEditorCore';


export default class Editor extends React.Component {
  static propTypes = {
  	ns:React.PropTypes.string,
    data: React.PropTypes.object,
  };
  static defaultProps = {
  	ns: "Editor",
  	data: {
  		_id:"none",
  		type:"txt",
  		data:""
  	}
  };

  constructor(props) {
    super(props);
    this.save=this.save.bind(this);
    this.showViewer=this.showViewer.bind(this);
    this.handleMsg=this.handleMsg.bind(this);
    this.handleMsgSave=this.handleMsgSave.bind(this);
    this.handleMsgCancel=this.handleMsgCancel.bind(this);
  }

  get editorCore() { //根据数据类型选择编辑器
    const EditorCores={
      "txt":TextEditorCore,
      "md":MarkdownEditorCore
    };
  	return EditorCores[this.props.data.type];
  }

  save(data){
  	this.data=data; //暂存所编辑的数据
  }

  render() {
    const defaultValue=this.props.data.data;
  	const EditorCore=this.editorCore;
    return (
      <EditorCore defaultValue={defaultValue} onChange={this.save}/>
    );
  }
  // 
  // render() {
  //   return <div>editor</div>
  // }

  showViewer(){
    const {ns}=this.props;
    PubSub.publish(ns,{show:"viewer"});
  }

  handleMsg(_id,msg){
    switch(msg.action){
      case "save":return this.handleMsgSave();
      case "cancel":return this.handleMsgCancel();
    }
  }

  handleMsgSave(){
    console.log("todo,save data",this.data);
    this.showViewer()
  }

  handleMsgCancel(){
    this.showViewer();
  }
  componentDidMount() {
    const {data}=this.props;
  	this.token=PubSub.subscribe(data._id,this.handleMsg)
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
}
