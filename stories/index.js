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
