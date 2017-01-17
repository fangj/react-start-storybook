import React from 'react';
import Switcher from './SwitcherE2.js';
import EditorFull from './EditorFull';
import ViewerFull from './ViewerFull';
export default class ViewerAndEditor extends React.Component {
  static propTypes = {
    ns: React.PropTypes.string,
    data: React.PropTypes.object,
  };
	static defaultProps = {
		ns:"ViewerAndEditor" ,
		data: {
  		_id:"none",
  		type:"md",
  		data:"# abc"
  	}
	};
  constructor(props) {
    super(props);
  }

  render() {
  	const {data}=this.props;
    return (
      <Switcher defaultName="editor">
      	<ViewerFull name="viewer" data={data}/>
      	<EditorFull name="editor" data={data}/>
      </Switcher>
    );
  }
}
