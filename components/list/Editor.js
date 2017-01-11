import React from 'react';

//Editor(ns,data)
//=>id,{action:save} 保存数据
//=>id,{action:cancel} 不保存数据
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
class TextEditorCore extends React.Component {
  static propTypes = {
    defaultValue: React.PropTypes.string,
    onChange:React.PropTypes.func
  };
  static defaultProps = {
    defaultValue:"" ,
    onChange:()=>{console.warn("TextEditorCore need onChange props")}
  };
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.onChange(e.target.value)
  }
  render() {
    return (
      <textarea defaultValue={this.props.defaultValue} onChange={this.handleChange}/>
    );
  }
}


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
  		data:{}
  	}
  };

  constructor(props) {
    super(props);
    this.save=this.save.bind(this);
  }

  get editorCore() { //根据数据类型选择编辑器
    const EditorCores={"txt":TextEditorCore};
  	return EditorCores[this.props.type];
  }

  get data(){
  	return this.props.data.data;//取得要编辑的数据
  }

  save(data){
  	this.data=data; //暂存所编辑的数据
  }

  render() {
  	const EditorCore=this.editorCore;
    return (
      <EditorCore defaultValue={this.data} onChange={this.save}/>
    );
  }

  componentDidMount() {
  	
  }
}
