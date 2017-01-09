import React from 'react';
//用itemV渲染items列表
export default class List extends React.Component {
  static propTypes = {
    items: React.PropTypes.array,
    ItemV: React.PropTypes.func,
    ns:React.PropTypes.string //namespace
  };

  static defaultProps={
    items:[],
    ItemV:({item,idx})=><pre key={idx}>{item}</pre>,
    ns:"list"
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {className,items,ItemV,ns,...others} =this.props;

    return (
      <div className={className||""}>
        {items.map((item,idx)=><ItemV key={idx} item={item} idx={idx} ns={ns+"."+idx} {...others}/>)}
      </div>
    );
  }
}
