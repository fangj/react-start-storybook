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
  ))