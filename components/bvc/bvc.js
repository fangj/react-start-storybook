//
//BVC(BVCM,BVCV,BVCE)
//核心功能，用于切换M,V,E
//如何切换？
//type为空时显示M
//type不为空时:根据内部状态vtype显示V或E
//默认内部状态为V
import React from 'react';
require('./bvc.less');
import BVCM from './bvcm';
import BVCV from './bvcv';
import BVCE from './bvce';
export default class BlockViewController extends React.Component {
  static propTypes = {
    node: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state={};
    this.switchView=this.switchView.bind(this);
  }

  render() {
    var Bvc;
    const {node}=this.props;
    const {vtype,dtype}=this.state;
    //当节点为空时，可以由dtype表示要编辑的类型
    if(!node.type&&!dtype){
      Bvc=BVCM;//菜单
    }else{
      if(vtype=='edit'){
        Bvc=BVCE;//编辑
      }else{
        Bvc=BVCV;//展示
      }
    }
    return (
      <Bvc switchView={this.switchView} node={node} dtype={dtype}/>
    );

  }

/**
 * [switchView description]
 * @param  {string} vtype 视图类型:edit,view
 * @param  {string} dtype 数据类型:等同于node.type，用于新建节点时指示节点类型
 */
  switchView(vtype,dtype){//切换视图
    this.setState({vtype,dtype})
  }
}



