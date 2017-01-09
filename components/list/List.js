import React from 'react';
//用itemV渲染items列表
export default class List extends React.Component {
  static propTypes = {
    items: React.PropTypes.array,
    itemV: React.PropTypes.func
  };

  static defaultProps={
    items:[],
    itemV:(item,idx)=><pre key={idx}>{item}</pre>
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {className,items,itemV} =this.props;
    return (
      <div className={className||""}>
        {items.map(itemV)}
      </div>
    );
  }
}
