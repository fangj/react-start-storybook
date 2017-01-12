import React from 'react';
import { storiesOf, action } from '@kadira/storybook';


storiesOf('Button', module)
  .add('with text', () => (
  	<button type="button" className="btn btn-success" onClick={action('clicked')}>Success</button>
  ))
  .add('with some emoji', () => (
    <button onClick={()=>toastr.info('Are you the 6 fingered man?')}>😀 😎 👍 💯</button>
  ))
  .add('with pubsub', () => (
    <button onClick={()=>PubSub.publish('msg.error','something wrong')}>😀 😎 👍 💯</button>
  ));
import BVC from '../components/bvc/bvc.js'
storiesOf('BlockViewController', module)
  .add('BVC notype', () => (
    <BVC node={{}}/>
  ))
  .add('BVC txt', () => (
    <BVC node={{type:"txt"}}/>
  ))
const HelloComponent= ({name}) => <span>Hello,{name}</span>
const CounterComponent= () =>{
  var counter;
  return <span onClick={()=>counter++}>Hello,{counter}</span>
} 
storiesOf('Hello', module)
  .add('Hello1', () => (
    <HelloComponent name="Jack"/>
  ))
  .add('Counter', () => (
    <CounterComponent/>
  ));

import List from '../components/list/List.js'
storiesOf('List', module)
  .add('List', () => (
    <List className="Jack" items={[1,2,3]} ns="somelist" ItemV={({item,idx})=><pre key={idx}>{item}</pre>}/>
  ));

const A=({show})=><div onClick={()=>show('b')}>A</div>
const B=({show})=><div onClick={()=>show('a')}>B</div>

import Switcher from '../components/list/Switcher.js'
storiesOf('Switcher', module)
  .add('Switcher', () => (
    <Switcher defaultKey='a' views={{a:A,b:B}}/>
  ));


 
const AE=({ns})=><div onClick={()=>
  { 
    console.log('ns',ns)
      PubSub.publish(ns,{show:'b'})
  }
}>A</div>
const BE=({ns})=><div onClick={()=>PubSub.publish(ns,{show:'a'})}>B</div>

import SwitcherE from '../components/list/SwitcherE.js'
storiesOf('SwitcherE', module)
  .add('SwitcherE', () => (
    <SwitcherE defaultKey='a' views={{a:AE,b:BE}}/>
  ));

import Menu from '../components/list/Menu.js'
storiesOf('Menu', module)
  .add('Menu', () => (
    <Menu />
  ));

const editItems=[{
 _id:"0", //要操作的数据对象id
 action:"save", //操作
 className:"fa fa-save" //保存数据并切换到展示试图
},{
 _id:"0", //要操作的数据对象id
 action:"remove", //操作
 className:"fa fa-remove" //取消修改并切换到展示试图
}];
const viewItems=[{
 _id:"0", //要操作的数据对象id
 action:"edit", //操作
 className:"fa fa-edit" //编辑数据
},{
 _id:"0", //要操作的数据对象id
 action:"remove", //操作
 className:"fa fa-trash" //删除数据
}];
var TextArea=(props)=><textarea {...props}/>; //简单包装
import ReactPlayer from 'react-player'
import MenuBar from '../components/list/MenuBar.js'
storiesOf('MenuBar', module)
  .add('EditorMenuBar', () => (
    <MenuBar items={editItems}/>
  ))
  .add('ViewerMenuBar', () => (
    <MenuBar items={viewItems}/>
  ))
  .add('Txt', () => (
    <div><TextArea/></div>
  ))
  .add('Viedo', () => (
     <Video
  src="http://6968.liveplay.myqcloud.com/live/6968_8ee85003b4.m3u8"
   type="application/x-mpegURL"
/>
  ));

import Video from 'react-videojs';

storiesOf('Video', module)
  .add('Viedo', () => (
     <Video
  src="http://6968.liveplay.myqcloud.com/live/6968_8ee85003b4.m3u8"
   type="application/x-mpegURL"
/>
  ));

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
storiesOf('TextEditorCore', module)
  .add('TextEditorCore', () => (
     <TextEditorCore/>  ));

import HaveApi from '../components/list/HaveApi'
import {injectApi,injectData,injectDataApi} from '../components/list/injectRest'
import Mock from 'mockjs'

Mock.mock("/test", 'get', {
    type: 'get'
});

const HaveData=({data,children})=><pre>{JSON.stringify(data)}{children}</pre>

const X=injectApi("/test")(HaveApi)
const Y=injectData("/test")(HaveData);
const Z=injectDataApi("/test")(HaveData);
storiesOf('HaveApi',module)
.add('HaveApi', ()=><X>aa</X>)
.add('HaveData', ()=><Y>xx</Y> )
.add('HaveDataApi', ()=><Z>hello</Z> );
