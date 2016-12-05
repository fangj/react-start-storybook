import React from 'react';

import MyStatefulEditor from './rte.js';

export default class BlockViewControllerEditor extends React.Component {
  static propTypes = {
    block: React.PropTypes.object.isRequired,
    save:React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onChange=this.onChange.bind(this);
    this.save-this.save.bind(this);
    this.data=props.block.data;
  }

  render() {
  	const {block}=this.props;
    return (
      <div>
      <MyStatefulEditor value={block.data} onChange={this.onChange}/>
      <button onClick={()=>this.save()} type="button" className="btn btn-success">保存</button>
      </div>
    );
  }

  onChange(data){
	this.data=data;
  }

  save(){
  	this.props.save(this.data);
  }

}
