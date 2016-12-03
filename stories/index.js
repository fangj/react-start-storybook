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

import SvgShape from '../components/svg';
storiesOf('SVG', module)
  .add('SvgShape', () => (
    <SvgShape />
  ))

import BezierEditor from '../components/bezier';
storiesOf('BezierEditor', module)
  .add('BezierEditor', () => (
    <BezierEditor />
  ))