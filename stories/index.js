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
import ListR from '../components/list/ListR.js'
import Mock from 'mockjs'


const Random=Mock.Random;
const mockItems=()=>Mock.mock("/items", 'get',[Random.natural(),Random.natural()]);

mockItems();//生成测试数据
storiesOf('List', module)
  .add('List', () => (
    <List className="Jack" items={[1,2,3]} ns="somelist" itemProps={{x:3}} ItemView={({item,idx})=><pre key={idx}>a:{item}</pre>}/>
  ))
  .add('ListR', () => (
    <ListR className="Rose" url="/items" ns="somelist2" itemProps={{y:3}} ItemView={({item,idx,refresh})=><pre key={idx} onClick={()=>{mockItems();refresh();}}>b:{item}</pre>}/>
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

Mock.mock("/test", 'get', {
    type: 'get'
});

const HaveData=({data,children})=><pre>{JSON.stringify(data)}{children}</pre>

const X=injectApi("/test")(HaveApi)
const Y=injectData("/test")(HaveData);
const Z=injectDataApi("/test")(HaveData);
storiesOf('injectRest',module)
.add('HaveApi', ()=><X>aa</X>)
.add('HaveData', ()=><Y>xx</Y> )
.add('HaveDataApi', ()=><Z>hello</Z> );

import promiseView from '../components/list/promiseView'
var p=Promise.resolve("Success");
var V=({abc})=><div>hello,{abc}</div>
var PV=promiseView(p,{value:"abc"})(V);

import promiseFactoryView from '../components/list/promiseFactoryView'
var counter=1;
var pf=()=> Promise.resolve(counter++);
var V2=({abc,ns,refresh})=><ul>
  <li>hello,{abc}</li>
  <li onClick={refresh} style={{cursor:"pointer"}}>click herer refresh by props function</li>
  <li onClick={()=>PubSub.publish(ns,"refresh")} style={{cursor:"pointer"}}>click here refresh by pubsub</li>
</ul>
var PFV=promiseFactoryView(pf,{value:"abc"})(V2);

storiesOf('promiseView',module)
.add('promiseView', ()=><PV/>)
.add('promiseFactoryView', ()=><PFV/>)

import {injectApi as injectApi2,injectValue as injectValue2,injectValueApi as injectValueApi2} from '../components/list/injectRest2'

const HaveData2=({value,children})=><pre>{JSON.stringify(value)}{children}</pre>

const X2=injectApi2("/test")(HaveApi)
const Y2=injectValue2("/test")(HaveData2);
const Z2=injectValueApi2("/test",{value:"data"})(HaveData);
storiesOf('injectRest2',module)
.add('HaveApi', ()=><X2>aa</X2>)
.add('HaveData', ()=><Y2>xx</Y2> )
.add('HaveDataApi', ()=><Z2>hello</Z2> );

import ShowChildren from '../components/list/ShowChildren';
storiesOf('ShowChildren',module)
.add('ShowChildren', ()=><ShowChildren>
  <div name="aa">aa</div>
  <div name="bb">bb</div>
  </ShowChildren>)



import Switcher2 from '../components/list/Switcher2.js'
import SwitcherE2 from '../components/list/SwitcherE2.js'
storiesOf('Switcher2', module)
  .add('Switcher2', () => (
    <Switcher2 defaultName='b' >
      <A name='a'/>
      <B name='b'/>
    </Switcher2>
  ))
  .add('SwitcherE2', () => (
    <SwitcherE2 defaultName='b' >
      <AE name='a'/>
      <BE name='b'/>
    </SwitcherE2>
  ));

import ViewerAndEditor from '../components/list/ViewerAndEditor';
storiesOf('ViewerAndEditor', module)
  .add('ViewerAndEditor', () => (
    <ViewerAndEditor/>
  ))